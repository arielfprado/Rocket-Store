import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
  }

  form {
    width: 500px;
    background-color: #f1f2f4;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }

  .error-id {
    border: 1px solid red;
  }

  .endereco-title,
  .line-1,
  .line-2,
  .payment-title {
    color: ${({ theme }) => theme.colors.blue};
  }

  .header-icon-wrapper {
    display: flex;
    width: 50%;
    top: 5%;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }

  .form-wrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-size: 13px;
    gap: 1rem;
    .title {
      margin-top: 1rem;
      font-size: 20px;
    }
  }

  .credit-name,
  .credit-number,
  .credit-expires,
  .credit-cvv {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    color: #718096;
  }

  input,
  select {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
  }

  .group {
    width: 100%;
  }

  .cartao-salvo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    div {
      display: flex;
      width: 100%;
    }
  }

  .cartao-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    gap: 20px;
  }

  .error-id {
    border: 1px solid red;
  }

  .buttons-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  .pagamento-button {
    height: 40px;
    width: 180px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    z-index: 2;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }
  }

  .cancelar-button {
    height: 40px;
    width: 90px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
    font-size: 17px;
    z-index: 2;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;
    }
  }

  @media (max-width: 992px) {
    margin-top: 2rem;
    .cartao-salvo {
      flex-direction: column;
      gap: 0.5rem;
    }
    .cartao-wrapper {
      flex-direction: column;
      gap: 0.5rem;
    }
    .buttons-wrapper {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .header-icon-wrapper {
      width: 70%;
    }
  }
`;
