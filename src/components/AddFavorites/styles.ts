import styled from "styled-components";

export const Container = styled.div`
  .add-to-favorites-button {
    height: 40px;
    width: 200px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
    font-size: 17px;
    z-index: 2;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;
    }
  }
`;
