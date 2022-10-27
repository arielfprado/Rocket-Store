import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styles from "./styles";

import api from "../../services/api";

import { IProductRequestProps } from "../../interfaces/Products";

export function SizeButton() {
  const [product, setProduct] = useState<IProductRequestProps>();
  const [select, setSelected] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    api.get<IProductRequestProps>(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <Styles.Container>
      <div className="size-wrapper">
        <div className="size-title">
          <h5>Selecione o tamanho</h5>
        </div>
        <div className="button-size">
          {product?.sizeOptions.map((size, index) => (
            <button
              className={`${
                select === index ? "size-product active" : "size-product"
              }`}
              onClick={() => setSelected(index)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </Styles.Container>
  );
}
