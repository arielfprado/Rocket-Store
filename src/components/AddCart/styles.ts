import styled from "styled-components";

export const Container = styled.div`
  .add-to-shopping-cart-button {
    height: 40px;
    width: 200px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    z-index: 2;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }
  }
`;
