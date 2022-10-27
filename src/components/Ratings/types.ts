import { IPageableProps, ISortedProps } from "../Pagination/types"

export interface IRatingsProps {
  key: number
  text: string
  score: number
}

export interface IRatingDataProps {
  content: IRatingsProps[]
  pageable: IPageableProps
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: ISortedProps
  first: boolean
  numberOfElements: number
  empty: boolean
}
