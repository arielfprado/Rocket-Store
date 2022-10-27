import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 4vw;
  margin-top: 4vw;

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

  .trash-icon {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    top: 2%;
    left: 85%;
    padding: 3%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    border: none;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }
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

  .shoppingcart-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
    button {
      background: #e2e8f0;
      border-radius: 5px;
      padding: 0.4rem 0.8rem;
      border: none;
      cursor: pointer;
    }
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
