import styled from "styled-components";

export const ShoppingCartCardSummaryWrapper = styled.div`
  width: 100%;

  .cardsummary-main {
    margin-top: 4rem;
    max-width: 50%;
    padding-left: 5rem;
    margin-bottom: 2rem;
  }

  .free {
    color: #38b2ac;
  }
  .cardsummary-discount {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 4rem;

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 13px 20px;
      gap: 10px;
      width: 327px;
      height: 50px;
      background: #ffffff;
      border: 1.5px solid #b3b3b3;
      border-radius: 8px;
    }
  }
  .cardsummary-info {
    max-width: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4rem;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      font-weight: 500;
    }
    .card-summary-spacebetween {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    height: 48px;
    border-radius: 30px;
    color: white;
    background: #000000;

    font-size: 20px;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    .cardsummary-main {
      width: 80%;
      max-width: 100%;
      padding-left: 1rem;
    }
    .cardsummary-descount {
      input {
        width: 300px;
      }
    }
  }

  @media (max-width: 768px) {
    .cardsummary-descount {
      flex-direction: column;
    }
  }
`;
