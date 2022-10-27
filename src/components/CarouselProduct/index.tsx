import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import * as Styles from "./styles";

import { IProductRequestProps } from "../../interfaces/Products";

export function CarouselProduct() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: true,
  };

  const [product, setProduct] = useState<IProductRequestProps>();
  const { id } = useParams();

  useEffect(() => {
    api.get<IProductRequestProps>(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <Slider {...settings}>
      <Styles.Container>
        <>
          <div className="slide-1">
            <img className="image-product" src={product?.images[0]} alt="" />
          </div>
          <div className="slide-2">
            <img className="image-product" src={product?.images[1]} alt="" />
          </div>
          <div className="slide-3">
            <img className="image-product" src={product?.images[2]} alt="" />
          </div>
          <div className="slide-4">
            <img className="image-product" src={product?.images[3]} alt="" />
          </div>
        </>
      </Styles.Container>
    </Slider>
  );
}
