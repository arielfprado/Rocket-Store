import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styles from "./styles";

import api from "../../services/api";

import { IProductRequestProps } from "../../interfaces/Products";

export function ColorButton() {
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
      <div className="color-wrapper">
        <div className="color-title">
          <h5>Selecione a cor</h5>
        </div>
        <div className="button-color">
          {product?.colorOptions.map((color, index) => (
            <button
              style={{
                background: `linear-gradient(48deg, ${color} 0%, white 35%, ${color} 100%)`,
                borderRadius: "50%",
              }}
              className={`${
                select === index ? "color-product active" : "color-product"
              }`}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
      </div>
    </Styles.Container>
  );
}
