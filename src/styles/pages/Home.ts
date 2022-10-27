import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 432px);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;
