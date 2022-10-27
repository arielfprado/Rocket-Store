import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  transition: color 0.2s;

  &.active {
    cursor: default;
  }

  :hover {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
