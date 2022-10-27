import styled from "styled-components";

export const Crumb = styled.ul`
  width: 100%;
  display: inline;
  padding: 10px 16px 10px 10px;

  li {
    display: inline;
    font-size: 18px;
    color: #686363;
    justify-content: center;
    padding: 10px 5px 10px 5px;
  
    :nth-child(3) {
      color: #000;
    }
  }
`;
