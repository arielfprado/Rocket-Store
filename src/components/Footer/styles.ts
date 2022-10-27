import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.footer`
  position: sticky;
  width: 100%;
  background: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  height: 432px;

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 360px;
    height: 300px;
    padding-left: 5rem;
    padding-top: 68px;
    padding-bottom: 68px;
  }

  .title-container {
    display: flex;
    max-width: 360px;
    font-size: 48px;
  }

  .footer-items {
    display: grid;
    grid-template-columns: 150px 150px;
    margin-top: 0.5rem;
  }

  .footer-items .item {
    display: flex;
    width: 150px;
    font-size: 16px;
    margin-top: 2rem;
    cursor: pointer;
    border-bottom: 2px solid black;
    width: max-content;
  }

  @media (max-width: 992px) {
    .container {
      width: unset;
    }
    .title-container {
      font-size: 32px;
    }
    .footer-items .item {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding-left: 1.2rem;
    }
  }
`;
