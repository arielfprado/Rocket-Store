import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Tabs } from "../components/Tabs";
import { Tab } from "../components/Tab";

import { IProductRequestProps } from '../interfaces/Products';



import api from "../services/api";
import * as Styles from "../styles/pages/ProductDetail";
import { Pagination } from "../components/Pagination";

import { Breadcrumb } from '../components/BreadCrumb';
import { getRatings } from '../services/ratingContext';
import { Ratings } from '../components/Ratings';
import { IRatingDataProps } from '../components/Ratings/types';
import { SizeButton } from '../components/SizeButton';
import { ColorButton } from '../components/ColorButton';
import { AddCart } from '../components/AddCart';
import { AddFavorites } from '../components/AddFavorites';
import { CarouselProduct } from '../components/CarouselProduct';

import { useShoppingCart } from "../contexts/useShoppingCart";
import { IProductProps } from "../components/Pagination/types";
import {useFavorites} from "../contexts/useFavorites";
import { ISCProductProps } from "../components/ShoppingCart/ShoppingCartCard/types";



export function ProductDetail() {
  const [product, setProduct] = useState<IProductRequestProps>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // Pagination
  const [data, setData] = useState<IRatingDataProps>({} as IRatingDataProps);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPageLimit, setMaxPageLimit] = useState<number>(10);
  const [minPageLimit, setminPageLimit] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const [pageTotal, setPageTotal] = useState<number>(10);
  const [scproduct, setScproduct] = useState<ISCProductProps>({} as ISCProductProps);
  const [productCard, setProductCard] = useState({} as IProductProps)

  useEffect(() => {
    api
      .get<IProductRequestProps>(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);

        const ratingProps = {
          currentPage: currentPage,
          productId: id,
          size: pageSize,
        };

        getRatings(ratingProps).then((data: IRatingDataProps) => {
          setData(data);

          setIsLoading(false);
        });
        
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setMaxPageLimit(data.totalPages);
  }, [data]);

  useEffect(() => {
    const ratingProps = {
      currentPage: currentPage,
      productId: id,
      size: pageSize,
    };
    getRatings(ratingProps).then((data: IRatingDataProps) => {

        setData(data)
    })
}, [currentPage])

  useEffect(() => {
    if(product) {
      const newProductCard = {
      id: product.id,
      title: product.title,
      tag: product.tag,
      discount: product.discount,
      price: product.price,
      images: product.images,
      categories: product.categories,
      }

      setProductCard(newProductCard)

      const newScproduct ={...product, quantity: 1 }

      setScproduct(newScproduct)


    }
  }, [product])

const onPrevClick = () => {
  if ((currentPage - 1) < minPageLimit) {
      return
  }
  setCurrentPage(prev => prev - 1)
}

const onNextClick = () => {
  if (currentPage + 1 > maxPageLimit) {
      return
  }
  setCurrentPage(prev => prev + 1)
}

const paginationAttributes = {
  currentPage,
  maxPageLimit,
  minPageLimit,
  size: pageSize,
  total: pageTotal,
  onNextClick,
  onPrevClick
};



const renderData = (data: IRatingDataProps) => {
  return (

      <div className="results-list">
        {data?.content?.map((rating, index: number) => (
          <Ratings key={index} text={rating.text} score={rating.score} />
        ))}
      </div>
    );
  };


const {handleAddOrRemoveProductOnFavorites, isProductInFavorites} = useFavorites()

const {handleAddProductOnShoppingCart, isProductInShoppingCart} = useShoppingCart();



  return (
    <Styles.Container>
      <div>
        {isLoading ? (
          <div className="loading-wrapper">Loading</div>
        ) : (

          <>
            <div className="bredcrumb-wrapper">
            <Breadcrumb />
            </div>
            <div className="product">
                <div className="img-container">
                  <CarouselProduct />
                </div>

                <div className="infos-product">

                  <div className="texts-product">
                    <h1 className="title-product">{product?.title}</h1>
                    <h2 className="price-product">R$ {product?.price.toFixed(2)}</h2>
                    <h5 className="rating-product">({product?.totalRating})</h5>
                    <h5 className="best-rating-product">{product?.bestRating}</h5>
                  </div>
                  <div className="options-product">
                    <SizeButton />
                    <ColorButton />
                  </div>
                  
              <div className="button-wrapper">
                <div className="add-buttons">
                  <AddCart 
                    key={scproduct.id}
                    scproduct={scproduct} handleAddProductOnShoppingCart={handleAddProductOnShoppingCart}
                    inShoppingCart={isProductInShoppingCart(scproduct.id)}
                  />
                  <p>ou</p>
                  <AddFavorites 
                    key={productCard.id}
                    product={productCard}
                    handleAddOrRemoveProductOnFavorites={handleAddOrRemoveProductOnFavorites}
                    inFavorites={isProductInFavorites(productCard.id)}/>
                </div>
                </div>
                  <div className="tab-product">
                    <Tabs>
                      <Tab
                        title="Descrição"
                        >
                        {product?.description}
                      </Tab>
                      <Tab
                        title="Envio"
                      >
                        <label>
                        Calcular frete
                        <input type="text" className="frete" placeholder="00000-000" />
                        </label>
                      </Tab>
                      <Tab
                        title="Avaliações"
                        >
                        <div className="main">
                          <Pagination
                            {...paginationAttributes}
                          >
                            <div className="mainData">
                              {data ? renderData(data) : "Loading"}
                            </div>
                          </Pagination>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </Styles.Container>
  );
}
