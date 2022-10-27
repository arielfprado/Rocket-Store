import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  button {
    font-size: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: yellow;
  }
  .off {
    color: #ccc;
  }
`;
