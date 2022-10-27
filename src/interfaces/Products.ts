export interface IProductRequestProps {
  id: string;
  title: string;
  tag: string;
  discount: number;
  price: number;
  images: string[];
  categories: string[];
  description: string;
  sizeOptions: string[];
  colorOptions: string[];
  totalRating: number;
  bestRating: string;
}
