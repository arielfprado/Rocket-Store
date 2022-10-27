import { ReactNode } from "react";

export interface IPaginationProps {
  maxPageLimit: number;
  total: number;
  minPageLimit: number;
  currentPage: number;
  size: number;
  onPrevClick: Function;
  onNextClick: Function;
  children: ReactNode;
}

export interface IProductProps {
  id: string;
  title: string;
  tag: string | null;
  discount: number | null;
  price: number;
  images: string[];
  categories: string[];
}

export interface IPageableProps {
  sort: ISortedProps;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ISortedProps {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface IDataProps {
  content: IProductProps[];
  pageable: IPageableProps;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: ISortedProps;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
