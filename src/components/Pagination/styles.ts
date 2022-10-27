import styled from "styled-components";

export const Container = styled.div`
  .page-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 6vw;
    margin-bottom: 2vw;

    button {
      border: none;
      font-size: 1.5rem;
      background-color: inherit;

      &:hover {
        cursor: pointer;
      }
    }

    .prev-button {
      margin-right: 2vw;
    }

    .next-button {
      margin-left: 2vw;
    }

    .page-icon {
      margin-left: 0.5vw;
      margin-right: 0.5vw;
    }
  }
`;
