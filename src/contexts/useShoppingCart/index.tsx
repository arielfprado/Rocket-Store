import { useState, useContext, createContext } from "react";
import { IShoppingCartContextData, IShoppingCartProviderProps } from "./types";
import { ISCProductProps } from "../../components/ShoppingCart/ShoppingCartCard/types";
export const ShoppingCartContext = createContext(
  {} as IShoppingCartContextData
);

export function ShoppingCartProvider(
  props: IShoppingCartProviderProps
): JSX.Element {
  const [shoppingCart, setShoppingCart] = useState<ISCProductProps[]>(() => {
    const storagedProducts = localStorage.getItem("shoppingCart");

    if (storagedProducts) {
      return JSON.parse(storagedProducts);
    }

    return [];
  });

  function isProductInShoppingCart(productId: string) {
    const productFound = shoppingCart.find(
      (shoppingCartProduct) => shoppingCartProduct.id === productId
    );

    if (productFound) {
      return true;
    }

    return false;
  }

  function handleAddProductOnShoppingCart(product: ISCProductProps) {
    if (isProductInShoppingCart(product.id)) {
      const quantityModifier = product.quantity;
      const updatedShoppingCartItem = shoppingCart?.filter(
        (shoppingCartProduct) => shoppingCartProduct.id === product.id
      );

      updatedShoppingCartItem[0].quantity = quantityModifier;

      const filteredShoppingCart = shoppingCart?.filter(
        (favoritesProduct) => favoritesProduct.id !== product.id
      );

      setShoppingCart(filteredShoppingCart);
      setShoppingCart((prevState) => [
        ...prevState,
        updatedShoppingCartItem[0],
      ]);
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

      return;
    }

    setShoppingCart((prevState) => [...prevState, product]);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    //atenção aqui, caso não adicione no localStoarge corretamente, adicionar o spread
  }

  function handleRemoveProductOnShoppingCart(product: ISCProductProps) {
    const filteredShoppingCart = shoppingCart?.filter(
      (shoppingCartProduct) => shoppingCartProduct.id !== product.id
    );

    setShoppingCart(filteredShoppingCart);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        handleAddProductOnShoppingCart,
        isProductInShoppingCart,
        handleRemoveProductOnShoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart(): IShoppingCartContextData {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }

  return context;
}

export default ShoppingCartContext;
