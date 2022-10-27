import * as Styles from "./styles";
import { MouseEvent, useState } from "react";
import { useSortParameter } from "../../contexts/useSortParameter";

export function Filter() {
  const options = ["Ordem alfabética", "Preço", "Categoria", "Lançamento"];

  const { handleUpdateSortParameter } = useSortParameter();

  const handleMenuItemClick = (index: number) => {
    switch (index) {
      case 0:
        handleUpdateSortParameter("title%2Casc");
        break;
      case 1:
        handleUpdateSortParameter("price%2Casc");
        break;
      case 2:
        handleUpdateSortParameter("categories%2Casc");
        break;
      case 3:
        handleUpdateSortParameter("tag%2Cdesc");
        break;
    }
  };

  return (
    <Styles.Container>
      <div className="filter-container">
        <div>Filtrar por</div>
        <select
          className="filter-button"
          onChange={(event) => handleMenuItemClick(event.target.selectedIndex)}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </Styles.Container>
  );
}
