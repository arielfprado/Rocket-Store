import styled from "styled-components";

export const Container = styled.div`
  .filter-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.3rem;
    margin-right: 3rem;
  }

  .filter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.75vw;
    background: ${({ theme }) => theme.colors.white};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 7px;
    width: 150px;
    padding: 0.2vw;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background: ${({ theme }) => theme.colors.gray};
      border-color: ${({ theme }) => theme.colors.gray};
    }
  }

  @media (max-width: 992px) {
    .filter-container {
      margin-right: 0;
    }
  }
`;
