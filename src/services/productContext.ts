import api from "./api";

export const getProducts = async (
  currentPage: number,
  sortParameter: string,
  pageSize: number = 10
) => {
  const data = await api
    .get(`/products?page=${currentPage}&size=${pageSize}&sort=${sortParameter}`)
    .then((response) => {
      return response.data;
    });
  return data;
};
