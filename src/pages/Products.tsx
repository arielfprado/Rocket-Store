import * as Styles from "../styles/pages/Products";
import { Pagination } from "../components/Pagination";
import { Filter } from "../components/Filter";
import { useEffect, useState } from "react";
import { IDataProps } from "../components/Pagination/types";
import { useSortParameter } from "../contexts/useSortParameter";
import { getProducts } from "../services/productContext";
import { ProductCard } from "../components/ProductCard";
import { IProductProps } from "../components/Pagination/types";
import { useFavorites } from "../contexts/useFavorites";
import { useShoppingCart } from "../contexts/useShoppingCart";

export function Products() {
  const [data, setData] = useState<IDataProps>({} as IDataProps);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [maxPageLimit, setMaxPageLimit] = useState<number>(10);
  const [minPageLimit, setminPageLimit] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageTotal, setPageTotal] = useState<number>(10);
  const { sortParameter } = useSortParameter();

  const { handleAddOrRemoveProductOnFavorites, isProductInFavorites } =
    useFavorites();

  const { handleAddProductOnShoppingCart, isProductInShoppingCart } =
    useShoppingCart();

  useEffect(() => {
    getProducts(currentPage, sortParameter).then((data: IDataProps) => {
      setData(data);

      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setMaxPageLimit(data.totalPages);
  }, [data]);

  useEffect(() => {
    setIsLoading(true);

    getProducts(currentPage, sortParameter).then((data: IDataProps) => {
      setData(data);
      setIsLoading(false);
    });
  }, [currentPage, sortParameter]);

  const onPrevClick = () => {
    if (currentPage - 1 < minPageLimit) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  };

  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    size: pageSize,
    total: pageTotal,
    onNextClick,
    onPrevClick,
  };

  const renderData = (data: IDataProps) => {
    return (
      <div className="results-list">
        {data?.content?.map((product: IProductProps) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              title: product.title,
              tag: product.tag,
              discount: product.discount,
              price: product.price,
              images: product.images,
              categories: product.categories,
            }}
            handleAddOrRemoveProductOnFavorites={
              handleAddOrRemoveProductOnFavorites
            }
            inFavorites={isProductInFavorites(product.id)}
            handleAddProductOnShoppingCart={handleAddProductOnShoppingCart}
            inShoppingCart={isProductInShoppingCart(product.id)}
          />
        ))}
      </div>
    );
  };

  return (
    <Styles.Container>
      <div className="page-header">
        <h2>Todos os Produtos</h2>
        <Filter />
      </div>

      <div className="main">
        <Pagination {...paginationAttributes}>
          <div className="mainData">{data ? renderData(data) : "Loading"}</div>
        </Pagination>
      </div>
    </Styles.Container>
  );
}
