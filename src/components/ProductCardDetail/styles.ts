import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s;
  margin-left: 4%;
  margin-top: 60px;

  &:hover {
    transform: translateY(-30px);
    transition: transform 0.5s;
  }

  .product-container {
    display: flex;
    position: relative;
    height: 300px;
    width: 214px;
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

  .product-description-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 214px;
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

  .product-quantity {
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