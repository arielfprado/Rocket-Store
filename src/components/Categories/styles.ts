import styled, { css } from "styled-components";

const category_content = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Container = styled.div`
  .categories-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 2rem;
    margin-top: 2rem;
  }

  .all-categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 4rem;
  }

  .roupas-e-acessorios {
    grid-area: 1 / 1 / 2 / 2;
    ${category_content}
  }

  .moveis {
    grid-area: 2 / 1 / 3 / 2;
    ${category_content}
  }

  .livros {
    grid-area: 1 / 2 / 3 / 3;
    ${category_content}
  }

  .informatica-e-eletronicos {
    grid-area: 1 / 3 / 2 / 4;
    ${category_content}
  }

  .papelaria {
    grid-area: 2 / 3 / 3 / 4;
    ${category_content}
  }

  .category-button {
    position: absolute;
    margin-bottom: 15px;
    background: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 0.7vw;
    border-radius: 0.35vw;
    font-size: 20px;
    transition: 0.2s;

    &:hover {
      transition: 0.3s;
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  }

  .category-image {
    display: flex;
    position: relative;
    flex-shrink: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .all-categories {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .livros,
    .roupas-e-acessorios,
    .papelaria,
    .moveis,
    .informatica-e-eletronicos {
      width: 322px;
      height: 228px;
    }
  }
`;
