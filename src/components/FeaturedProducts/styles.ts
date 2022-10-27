import styled from "styled-components";

export const Container = styled.div`
  .produtos-destaque-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  .results-list {
    margin-right: 4vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ver-mais-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3vw;
    height: 40px;
    width: 190px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 17px;
    z-index: 2;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }
  }

  @media (max-width: 1200px) {
    .results-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 992px) {
    .page-header {
      flex-direction: column;
      gap: 1rem;
    }
    h2 {
      margin-left: 0;
      font-size: 1rem;
    }
    .results-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .results-list {
      grid-template-columns: 1fr;
    }
  }
`;
