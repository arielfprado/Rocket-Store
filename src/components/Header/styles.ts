import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.nav`
  position: sticky;
  width: 100%;
  height: 93px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem;

  z-index: 2;

  background: ${theme.colors.white};
  color: ${theme.colors.black};

  .search {
    position: relative;
    margin-right: 1rem;
    .tooltip {
      position: absolute;
      border-radius: 10px;
      padding: 0.2rem 0.5rem;
      background: #000;
      color: #000;
      width: max-content;
      font-size: 0.8rem;
      top: 2rem;
      right: -13px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
      input {
        z-index: 1;
        outline: 0;
      }
      button {
        background-color: transparent;
        color: white;
        cursor: pointer;
        z-index: 0;
        border: none;
      }
      &::before {
        content: "";
        height: 10px;
        position: absolute;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #000;
        bottom: 35px;
        right: 5px;
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;

    .logo-img {
      transition-duration: 1.5s;
      transition-property: transform;
    }

    .logo {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        .logo-img {
          transform: rotateY(180deg);
        }
      }
    }

    .logo div {
      font-size: 22px;
      font-weight: 400;
      margin-left: 0.5rem;
    }

    img {
      width: 41px;
      height: 40px;
    }
  }

  .menu-items {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .menu-items .item {
    font-size: 16px;
    min-width: fit-content;
    position: relative;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  .menu-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  form {
    display: flex;
    align-items: center;
  }

  .search-button {
    display: flex;
    background: none;
    color: inherit;
    border: none;
    outline: inherit;
    padding: 0;

    :hover {
      color: ${({ theme }) => theme.colors.darkGray};
      cursor: pointer;
    }
  }

  input {
    height: 33px;
    width: 200px;
    background: ${theme.colors.black};
    color: ${theme.colors.lightGray};
    border-radius: 10px;
    border: none;
    padding: 0 0.3rem;
  }

  @media (max-width: 992px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    gap: 0.5rem;
    .star {
      margin-right: 0;
      .tooltip {
        left: -13px;
        right: unset;
        &::before {
          right: unset;
          left: 5px;
        }
      }
    }
    .menu {
      flex-direction: column;
      gap: 0.5rem;
    }
    .menu-items {
      max-width: 500px;
      overflow: hidden;
      overflow-x: scroll;
      padding-bottom: 1rem;

      ::-webkit-scrollbar {
        -webkit-appearance: none;
      }

      ::-webkit-scrollbar:vertical {
        width: 12px;
      }

      ::-webkit-scrollbar:horizontal {
        height: 12px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        border: 2px solid #ffffff;
      }

      ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #ffffff;
      }
    }
  }

  @media (max-width: 768px) {
    input {
      width: 150px;
    }
    .menu-items {
      max-width: 300px;
    }
  }
`;
