import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as Styles from "../styles/pages/Products";
import { ProductCard } from "../components/ProductCard";
import { useFavorites } from "../contexts/useFavorites";
import { useShoppingCart } from "../contexts/useShoppingCart";
import { IProductProps } from "../components/ProductCard/types";
import { getProducts } from "../services/productContext";
import { getCategories } from "../services/categoryContext";
import { ICategoryProps } from "../components/CategoryCard/types";

export function CategoryProducts() {
  const { categoryUrl = "" } = useParams();
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [category, setCategory] = useState<ICategoryProps>(
    {} as ICategoryProps
  );

  const { handleAddOrRemoveProductOnFavorites, isProductInFavorites } =
    useFavorites();

  const { handleAddProductOnShoppingCart, isProductInShoppingCart } =
    useShoppingCart();

  useEffect(() => {
    getCategoryInfo();
  }, [categoryUrl]);

  useEffect(() => {
    getCategoryProducts();
  }, [category]);

  const getCategoryInfo = async () => {
    const categories: ICategoryProps[] = await getCategories(0);
    const categoryInfo: ICategoryProps = categories.filter(
      (category: ICategoryProps) => category.url === categoryUrl
    )[0];
    setCategory(categoryInfo);
  };

  const getCategoryProducts = async () => {
    const allProducts: IProductProps[] = await getProducts(
      0,
      "title%2Casc",
      12
    ).then((response) => response.content);

    const categoryProducts: IProductProps[] = allProducts.filter((product) => {
      return product.categories.includes(category.title);
    });

    setProducts(categoryProducts);
  };

  return (
    <Styles.Container>
      <div className="page-header">
        <h2>{category.title}</h2>
      </div>

      {products ? (
        <div className="results-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddOrRemoveProductOnFavorites={
                handleAddOrRemoveProductOnFavorites
              }
              inFavorites={isProductInFavorites(product.id)}
              className="card"
              handleAddProductOnShoppingCart={handleAddProductOnShoppingCart}
              inShoppingCart={isProductInShoppingCart(product.id)}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Styles.Container>
  );
}
