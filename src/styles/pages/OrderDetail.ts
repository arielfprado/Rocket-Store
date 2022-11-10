import styled from 'styled-components';

export const OrderDetail = styled.div`
    .product-container {
    display: flex;
    position: relative;
    height: 300px;
    width: 214px;
  }

  h1 {
    text-align: center;
  }

  .results-list {
    margin-right: 4%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .product-container img{
    display: flex;
    position: relative;
    flex-shrink: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  .product-details {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 214px;
    max-height: 100px;
  }

  .free {
    color: #38b2ac;
  }

  .product-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;
    width: max-content;
  }

  .product-price {
    font-size: 1rem;
    margin-top: 0.5rem;
    width: max-content;
  }

  .cardsummary-info {
    margin-top: 80px;
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

  .orders-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    margin-bottom: 40px;
    height: 48px;
    border-radius: 30px;
    color: white;
    background: #000000;

    font-size: 20px;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .results-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 992px) {
    .page-header {
      flex-direction: column;
      gap: 1rem;
    }
    h2 {
      margin-left: 0;
      font-size: 1rem;
    }
    .results-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .results-list {
      grid-template-columns: 1fr;
    }
  }
`