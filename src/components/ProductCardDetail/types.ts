export interface IProductCardDetailProps {
  id: string;
  title: string;
  tag: string | null;
  discount: number | null;
  price: number;
  images: string[];
  categories: string[];
  quantity: number;
}