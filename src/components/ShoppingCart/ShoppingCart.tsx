import { ShoppingCartCardComponent } from "./ShoppingCartCard/ShoppingCart";
import { ShoppingCartCardSummary } from "./ShoppingCartCardSummary/ShoppingCart";
import { useShoppingCart } from "../../contexts/useShoppingCart";
import { ISCProductProps } from "./ShoppingCartCard/types";
import { useState, useEffect } from "react";

import * as S from "./styles";

export function ShoppingCartComponent() {
  const {
    shoppingCart,
    handleAddProductOnShoppingCart,
    isProductInShoppingCart,
    handleRemoveProductOnShoppingCart,
  } = useShoppingCart();

  function compareId(a: ISCProductProps, b: ISCProductProps) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  return (
    <S.ShoppingCartComponentWrapper>
      <div className="container">
        <h2>Carrinho de compras</h2>
        <div className="container-cards">
          {shoppingCart.sort(compareId).map((product) => (
            <ShoppingCartCardComponent
              key={product.id}
              product={product}
              className="card"
              handleAddProductOnShoppingCart={handleAddProductOnShoppingCart}
              inShoppingCart={isProductInShoppingCart(product.id)}
              handleRemoveProductOnShoppingCart={
                handleRemoveProductOnShoppingCart
              }
            />
          ))}
        </div>
      </div>
      <ShoppingCartCardSummary />
    </S.ShoppingCartComponentWrapper>
  );
}
