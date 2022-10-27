import * as Styles from "./styles";
import { FiEye, FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BsCart, BsFillCartCheckFill } from "react-icons/bs";
import { IProductCardProps } from "./types";
import { useNavigate } from "react-router-dom";
import { ISCProductProps } from "../../components/ShoppingCart/ShoppingCartCard/types";

export function ProductCard(props: IProductCardProps) {
  const priceCorrected = props.product.price.toFixed(2);

  const navigate = useNavigate();

  const scproduct: ISCProductProps = { ...props.product, quantity: 1 };

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
        <div className="center-buttons">
          <div className="buttons-container">
            {props.inFavorites ? (
              <button
                title="Remover dos favoritos"
                className="remove-from-favorites-button"
                onClick={() =>
                  props.handleAddOrRemoveProductOnFavorites(props.product)
                }
              >
                <FaStar size="1.45vw" />
              </button>
            ) : (
              <button
                title="Adicionar aos favoritos"
                className="add-to-favorites-button"
                onClick={() =>
                  props.handleAddOrRemoveProductOnFavorites(props.product)
                }
              >
                <FiStar size="1.45vw" />
              </button>
            )}

            {props.inShoppingCart ? (
              <button
                title="Adicionar ao carrinho"
                className="add-to-shopping-cart-button"
              >
                <BsFillCartCheckFill />
              </button>
            ) : (
              <button
                title="Adicionar ao carrinho"
                className="add-to-shopping-cart-button"
                onClick={() => props.handleAddProductOnShoppingCart(scproduct)}
              >
                <BsCart />
              </button>
            )}

            <button
              title="Ver detalhes do produto"
              className="product-details-button"
              onClick={() => navigate(`/products/${props.product.id}`)}
            >
              <FiEye />
            </button>
          </div>
        </div>
      </div>
      <div className="product-description-container">
        <div className="product-title">{props.product.title}</div>
        <div className="product-price">{`R$ ${priceCorrected}`}</div>
      </div>
    </Styles.Container>
  );
}
