import api from "./api";

export const getRatings = async (props: {
  currentPage: number;
  productId: string | null | undefined;
  size: number;
}) => {
  const data = await api
    .get(
      `/ratings/product/${props.productId}?page=${props.currentPage}&size=${props.size}`
    )
    .then((response) => {
      return response.data;
    });
  return data;
};
