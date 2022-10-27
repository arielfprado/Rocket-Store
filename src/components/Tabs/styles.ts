import styled from "styled-components";

export const Tabs = styled.div`
  .tabs-wrapper {
    display: flex;
    height: 150px;
    max-width: 100%;
    flex-direction: column;
  }

  ul {
    margin-bottom: 10px;
  }
  /* li {
    display: inline-block;
  } */

  button::after {
    text-decoration: underline;
    transition-duration: 0.2;
  }
  p {
    padding-top: 20px;
  }
`;
