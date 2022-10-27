import Slider from "react-slick";
import Logo from "../../assets/conquer-logo.png";
import * as Styles from "./styles";
import { FiArrowRight } from "react-icons/fi";
import Polygon from "../../assets/polygon.png";

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <Styles.Container>
      <img src={Polygon} alt="polygon" className="polygon" />
      <Slider {...settings}>
        <div className="slide-1">
          <div className="AtoZ">
            <p>Produtos de A a Z</p>
            <img src={Logo} alt="Conquer logo" />
          </div>
          <div className="title-container">Rocket Store</div>
          <button className="button">
            Compre agora
            <FiArrowRight className="arrow" size="20" />
          </button>
          <div className="slider-footer">
            <p>
              50% off
              <span> | </span>
              <a>Veja as ofertas</a>
            </p>
          </div>
        </div>
        <div className="slide-2">
          <div className="AtoZ">
            <p>Produtos de A a Z</p>
            <img src={Logo} alt="Conquer logo" />
          </div>
          <div className="title-container">Rocket Store</div>
          <button className="button">
            Compre agora
            <FiArrowRight className="arrow" size="20" />
          </button>
          <div className="slider-footer">
            <p>
              50% off
              <span> | </span>
              <a>Veja as ofertas</a>
            </p>
          </div>
        </div>
      </Slider>
    </Styles.Container>
  );
}
