import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../assets/carousel-image-1.png";
import Slide2 from "../../assets/carousel-image-2.png";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;

  .slide-1,
  .slide-2 {
    position: relative;
  }

  .slide-1 {
    background: url(${Slide1});
    background-size: cover;
    width: 100%;
    height: 600px;
  }

  .slide-2 {
    background: url(${Slide2});
    background-size: cover;
    width: 100%;
    height: 600px;
  }

  .polygon {
    position: absolute;
    margin-top: 2rem;
    z-index: 1;
    width: 650px;
    height: 650px;
  }

  .AtoZ {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 16px;
    margin-top: 10rem;
    margin-left: 5.5vw;
    z-index: 3;
  }

  .AtoZ img {
    height: 40px;
    width: 40px;
    margin-left: 10px;
  }

  .title-container {
    margin-left: 5.1vw;
    margin-top: 1vw;
    font-size: 60px;
  }

  .button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vw;
    margin-left: 5.1vw;
    height: 40px;
    width: 190px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 17px;
    z-index: 3;

    :hover {
      cursor: pointer;
    }
  }

  .arrow {
    margin-left: 10px;
  }

  .slider-footer {
    font-size: 18px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 1200px) {
    height: 400px;
    .slide-1,
    .slide-2 {
      height: 400px;
    }
    .polygon {
      display: none;
    }
    .AtoZ {
      margin-top: 8rem;
    }
  }

  @media (max-width: 992px) {
    height: 300px;
    .slide-1,
    .slide-2 {
      height: 300px;
      background-size: 120% 120%;
    }
    .slider-footer {
      display: none;
    }
    .AtoZ {
      font-size: 12px;
      margin-top: 6rem;
    }
    .AtoZ img {
      display: none;
    }
    .title-container {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    .slide-1,
    .slide-2 {
      height: 300px;
      background-size: 110% 100%;
    }
  }

  @media (max-width: 576px) {
    height: 200px;
    .slide-1,
    .slide-2 {
      height: 200px;
      background-size: 130% 100%;
    }
    .AtoZ {
      margin-top: 4rem;
    }
  }
`;
