import styled from "styled-components";

export const Container = styled.div`
  .size-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .button-size {
    display: flex;
    max-width: 500px;
    margin-left: 5px;
    margin-bottom: 10px;
    gap: 10px;
  }

  .size-product {
    background-color: white;
    border: 1px solid black;
    column-gap: 2px;
    gap: 4px;
    height: 50px;
    width: 50px;

    &.active {
      border: 2px solid black;
    }
  }
`;
