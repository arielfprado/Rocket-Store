import { ICategoryProps } from "./types";
import { useNavigate } from "react-router-dom";

export function CategoryCard({ id, title, url, images }: ICategoryProps) {
  const navigate = useNavigate();

  return (
    <div className={url} key={id}>
      <img src={images} className="category-image" />
      <button
        className="category-button"
        onClick={() => navigate(`/category/${url}`)}
      >
        {title}
      </button>
    </div>
  );
}
