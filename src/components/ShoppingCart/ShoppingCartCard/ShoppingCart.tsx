import { useState, useEffect } from "react";
import * as Styles from "./styles";
import { ISCProductCardProps } from "./types";
import { FiTrash2 } from "react-icons/fi";
import { useShoppingCart } from "../../../contexts/useShoppingCart";

export function ShoppingCartCardComponent(props: ISCProductCardProps) {
  const {
    shoppingCart,
    handleRemoveProductOnShoppingCart,
    handleAddProductOnShoppingCart,
  } = useShoppingCart();
  const [quantity, setQuantity] = useState<number>(() => {
    const storagedProduct = shoppingCart?.filter(
      (shoppingCartProduct) => shoppingCartProduct.id === props.product.id
    );

    return storagedProduct[0].quantity;
  });

  useEffect(() => {
    const updatedProduct = shoppingCart?.filter(
      (shoppingCartProduct) => shoppingCartProduct.id === props.product.id
    );

    updatedProduct[0].quantity = quantity;
    handleAddProductOnShoppingCart(updatedProduct[0]);
  }, [quantity]);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const priceCorrected = (props.product.price * quantity).toFixed(2);

  return (
    <Styles.Container>
      <div className="product-container">
        <img
          src={props.product.images[0]}
          alt={`${props.product.title} image`}
        />
        {props.product.tag !== null ? (
          <div className="tag">{props.product.tag}</div>
        ) : (
          <div className="no-tag"></div>
        )}
        <button
          className="trash-icon"
          onClick={() => handleRemoveProductOnShoppingCart(props.product)}
        >
          <FiTrash2 />
        </button>
      </div>
      <div className="product-description-container">
        <div className="product-title">{props.product.title}</div>
        <div className="product-price">{`R$ ${priceCorrected}`}</div>
      </div>
      <div className="shoppingcart-actions">
        <button onClick={() => decrement()}>-</button>
        <p>{quantity}</p>
        <button onClick={() => increment()}>+</button>
      </div>
    </Styles.Container>
  );
}
