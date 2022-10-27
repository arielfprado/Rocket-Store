import * as Styles from "../styles/pages/Search";

import { useSearchParameter } from "../contexts/useSearch/index";
import { useFavorites } from "../contexts/useFavorites";
import { useShoppingCart } from "../contexts/useShoppingCart";
import { ProductCard } from "../components/ProductCard";

export function Search() {
  const { searchedProducts } = useSearchParameter();

  const { handleAddOrRemoveProductOnFavorites, isProductInFavorites } =
    useFavorites();

  const { handleAddProductOnShoppingCart, isProductInShoppingCart } =
    useShoppingCart();

  return (
    <Styles.Container>
      <div className="page-header">
        <h2>Resultados encontrados</h2>
      </div>

      <div className="results-list">
        {searchedProducts.map((product) => (
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
    </Styles.Container>
  );
}
