import styled from "styled-components";

export const Container = styled.div`
  .color-wrapper {
    display: flex;
    flex-direction: column;
  }

  .button-color {
    display: flex;
    max-width: 230px;
    gap: 10px;
  }

  .color-product {
    background-color: white;
    justify-content: center;
    margin-top: 15px;
    border: 0.5px solid black;
    height: 50px;
    width: 50px;

    &.active {
      border: 2px solid black;
    }
  }
`;
