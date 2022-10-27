import api from "./api";

export const getCategories = async (currentPage: number) => {
  const data = await api
    .get(`/categories?page=${currentPage}&size=10`)
    .then((response) => {
      return response.data.content;
    });

  return data;
};
