import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IProductRequestProps } from "../../interfaces/Products";

import api from "../../services/api";

import * as Styles from "./styles";

export function Breadcrumb() {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState<IProductRequestProps>();

  useEffect(() => {
    api.get<IProductRequestProps>(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);
    return (
      <Styles.Crumb>
        <ul>
          <li
            className={ location.pathname === "/" ? 
            "breadcrumb-active" : 
            "breadcrumb-not-active" }
          >
            Home /
          </li>
          <li
            className={ location.pathname.startsWith(`/category`) ? 
            "breadcrumb-active" : 
            "breadcrumb-not-active"}
          >
            {product?.categories} /
          </li>
          <li
            className={ location.pathname === `/products/${id}` ? 
            "breadcrumb-active" : 
            "breadcrumb-not-active"}
          >
            {product?.title}
          </li>
        </ul>
      </Styles.Crumb>
    );
}

