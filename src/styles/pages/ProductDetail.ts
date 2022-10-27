  import styled from "styled-components";


  export const Container = styled.div`

  .product {
    display: flex;
    width: 100%;
    margin-bottom: 50px;
  }


  .infos-product {
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 3rem;
  }

  h1 {
    margin: 0px 0px 10px 0px;
    font-size: 60px;
  }

  h2 {
    color: #686363;
    font-size: 30px;
  }

  h5 {
    color: #686363;
  }

  .texts-product {
    display: flex;
    flex-direction: column;
  }

.add-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

img {
  width: 500px;
}

.img-container {
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding: 0px 2rem;
}

.options-product {
  display: column;
  width: 100%;
  justify-content: start;
}

.frete {
  border-radius: 5px;
  margin-left: 20px;
  padding-left: 5px;
}

.add-product {
  margin: 20px 0px 0px 20px;
  padding-bottom: 20px;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: start;
}


.tabs-product {
  margin-bottom: 50px 0px 0px 50px;
}

.tab-product {
  width: 100%;
  justify-content: start;
}

@media (max-width: 992px) {
  .texts-product {
    text-align: center;
  }

  .infos-product {
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 3rem;

    /* justify-content: flex-start; */

    /* align-self: center; */
    /* align-items: right; */
  }

  h1 {
    margin: 0px 0px 10px 0px;
    font-size: 60px;
  }

  h2 {
    color: #686363;
    font-size: 30px;
  }

  h5 {
    color: #686363;
  }

  .texts-product {
    display: flex;
    flex-direction: column;
  }

  .add-buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    /* max-width: 100%; */
    width: 500px;
  }

  .img-container {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    padding: 0px 2rem;
  }

  .options-product {
    display: column;
    width: 100%;
    justify-content: start;
  }

  .frete {
    border-radius: 5px;
    margin-left: 20px;
    padding-left: 5px;
  }

  .add-product {
    margin: 20px 0px 0px 20px;
    padding-bottom: 20px;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    align-items: start;
  }

  .tabs-product {
    margin-bottom: 50px 0px 0px 50px;
  }

  .tab-product {
    width: 100%;
    justify-content: start;
  }

  @media (max-width: 992px) {
    .texts-product {
      text-align: center;
    }
    .product {
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
    .img-container {
      width: 100%;
      justify-content: center;
    }
    .infos-product {
      width: 100%;
      max-width: 500px;
      padding: 0px 2rem;
      justify-content: center;
      align-items: center;
    }
    .add-buttons {
      flex-direction: column;
    }
    .tab-product {
    }
    .button-color {
      flex-direction: column;
    }
  }
`;
