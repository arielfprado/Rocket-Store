import * as Styles from "./styles";
import { IProductCardDetailProps } from "./types";

export function ProductCardDetail(props: IProductCardDetailProps) {
  const priceCorrected = props.price.toFixed(2);

  return (
    <Styles.Container>
      <div className="product-container">
        <img
          src={props.images[0]}
          alt={`${props.title} image`}
        />
      </div>
      <div className="product-description-container">
        <div className="product-title">{props.title}</div>
        <div className="product-price">{`R$ ${priceCorrected}`}</div>
        <div className="product-quantity">{`Quantidade: ${props.quantity}`}</div>
      </div>
    </Styles.Container>
  );
}
