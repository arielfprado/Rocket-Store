import styled from "styled-components";

export const ShoppingCartComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    width: 100%;
  }
  h2 {
    display: flex;
    align-items: center;
    margin-left: 20vw;
    font-size: 2rem;
  }

  .container-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    .container-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 992px) {
    .container-cards {
      grid-template-columns: repeat(2, 1fr);
    }
    h2 {
      margin-left: 0;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .container-cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
