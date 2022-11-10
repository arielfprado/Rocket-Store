import styled from "styled-components";

export const MyOrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6%;
  .container {
    width: 94%;
  }
  h1 {
    font-family: "FONTSPRING DEMO - Greycliff CF";
    font-style: normal;
    font-weight: 400;
    font-size: 49px;
    line-height: 125%;

    text-align: center;
    color: #000000;
    margin: 4rem 0 2rem 0;
  }

  .rwd-table {
    margin: 1rem 0;
    min-width: 100%;
    border-collapse: collapse;
    background-color: #f1f2f4;
    display: flex;
    flex-direction: column;
    align-items: center;

    tr:first-child {
      background: #f1f2f4;
    }

    tr:not(:nth-child(1)) {
      border-top: 1px solid #f1f2f4;
      border-bottom: 1px solid #f1f2f4;
    }

    th {
      display: none;
    }

    @media (min-width: 768px) {
      display: table;
      background-color: unset;
    }

    td {
      display: block;

      &:first-child {
        padding-top: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media (min-width: 768px) {
          justify-content: flex-start;
        }
      }
      &:last-child {
        padding-bottom: 0.5rem;
      }

      &:before {
        content: attr(data-th);
        font-weight: bold;
        width: 8rem;
        display: inline-block;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }

    th,
    td {
      text-align: left;

      @media (min-width: 768px) {
        display: table-cell;
        padding: 0.25rem 0.5rem;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  .rwd-table {
    color: #000;
    border-radius: 0.4em;
    overflow: hidden;
    tr {
      border-color: lighten(#34495e, 10%);
    }
    th,
    td {
      margin: 1rem 1rem;
      @media (min-width: 768px) {
        padding: 1rem !important;
      }
    }

    .action {
      align-items: center;
      padding: 15px 30px;
      gap: 10px;
      background: #000000;
      border-radius: 50px;
      color: white;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      cursor: pointer;
      border: none;
    }
  }
`;
