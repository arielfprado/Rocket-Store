import { ProductCard } from "../components/ProductCard";
import { useFavorites } from "../contexts/useFavorites";
import { useShoppingCart } from "../contexts/useShoppingCart";
import * as Styles from "../styles/pages/Favorites";

export function Favorites() {
  const {
    favorites,
    handleAddOrRemoveProductOnFavorites,
    isProductInFavorites,
  } = useFavorites();

  const { handleAddProductOnShoppingCart, isProductInShoppingCart } =
    useShoppingCart();

  return (
    <Styles.Container>
      <div className="page-header">
        <h2>Favoritos</h2>
      </div>

      <div className="results-list">
        {favorites.map((product) => (
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
