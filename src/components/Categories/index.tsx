import * as Styles from "./styles";
import { getCategories } from "../../services/categoryContext";
import { useState, useEffect } from "react";
import { ICategoryProps } from "../CategoryCard/types";
import { CategoryCard } from "../CategoryCard";

export function Categories() {
  const [categories, setCategories] = useState<ICategoryProps[]>([]);
  useEffect(() => {
    getCategories(0).then((data: ICategoryProps[]) => {
      setCategories(data);
    });
  }, []);

  return categories ? (
    <Styles.Container>
      <div className="categories-title">
        <h2>Navegue por categorias</h2>
      </div>

      <div className="all-categories">
        {categories.map((category) => (
          <CategoryCard
            id={category.id}
            title={category.title}
            url={category.url}
            images={category.images}
          />
        ))}
      </div>
    </Styles.Container>
  ) : (
    <div>Loading</div>
  );
}
