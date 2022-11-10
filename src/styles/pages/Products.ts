import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 432px);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
  }

  h2 {
    display: flex;
    align-items: center;
    margin-left: 20%;
    font-size: 2rem;
  }

  .results-list {
    margin-right: 4vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
