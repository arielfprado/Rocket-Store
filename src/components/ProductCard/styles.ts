import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s;
  margin-left: 4vw;
  margin-top: 4vw;

  &:hover {
    transform: translateY(-2.1vw);
    transition: transform 0.5s;
  }

  .product-container {
    display: flex;
    position: relative;
    height: 27.8vw;
    width: 20vw;
  }

  .product-container img {
    display: flex;
    position: relative;
    flex-shrink: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  .tag {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    top: 5.5%;
    left: 4%;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    border: none;
  }

  .center-buttons {
    position: absolute;
    bottom: 5.5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .buttons-container button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.white};
    border: none;
    box-shadow: 1px 1px 2px 0.5px ${({ theme }) => theme.colors.darkGray};
    border-radius: 2px;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      transition: 0.3s;
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.darkGray};
      cursor: pointer;
    }
  }

  .button-container button[title] {
    position: relative;
    background: blue;
  }

  .product-description-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    max-height: 100px;
  }

  .product-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;
    width: max-content;
  }

  .product-price {
    font-size: 1rem;
    margin-top: 0.5rem;
    width: max-content;
  }

  @media (max-width: 992px) {
    .product-container {
      height: 350px;
      width: 250px;
    }
  }

  @media (max-width: 768px) {
    .product-container {
      height: 300px;
      width: 200px;
    }
  }
`;
