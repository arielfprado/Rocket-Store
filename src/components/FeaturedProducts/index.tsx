import { ProductCard } from "../ProductCard";
import { FiArrowRight } from "react-icons/fi";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { IProductProps } from "../ProductCard/types";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../contexts/useFavorites";
import { useShoppingCart } from "../../contexts/useShoppingCart";

import * as Styles from "./styles";

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<IProductProps[]>();

  useEffect(() => {
    api.get("/products/featured").then((response) => {
      setFeaturedProducts(response.data);
    });
  }, []);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  const { handleAddOrRemoveProductOnFavorites, isProductInFavorites } =
    useFavorites();

  const { handleAddProductOnShoppingCart, isProductInShoppingCart } =
    useShoppingCart();

  return (
    <Styles.Container>
      <div className="produtos-destaque-title">
        <h2>Produtos em destaque</h2>
      </div>
      <div className="results-list">
        {featuredProducts?.map((product: IProductProps) => {
          return (
            <ProductCard
              className="card"
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                tag: product.tag,
                discount: product.discount,
                price: product.price,
                images: product.images,
                categories: product.categories,
              }}
              handleAddOrRemoveProductOnFavorites={
                handleAddOrRemoveProductOnFavorites
              }
              inFavorites={isProductInFavorites(product.id)}
              handleAddProductOnShoppingCart={handleAddProductOnShoppingCart}
              inShoppingCart={isProductInShoppingCart(product.id)}
            />
          );
        })}
      </div>
      <div className="button-container">
        <button className="ver-mais-button" onClick={handleClick}>
          Ver mais
          <FiArrowRight className="arrow" size="20" />
        </button>
      </div>
    </Styles.Container>
  );
}
