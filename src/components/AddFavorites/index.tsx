import * as Styles from "./styles";
import { IAddFavoritesProps } from "./types";

export function AddFavorites(props: IAddFavoritesProps) {

  
  return (
    <Styles.Container>
      {props.inFavorites? (
        <button
          title="Adicionar aos favoritos"
          className="add-to-favorites-button" onClick={() => props.handleAddOrRemoveProductOnFavorites(props.product)} >
          Adicionado aos favoritos
        </button>
      ) : (
        <button
          title="Adicionar aos favoritos"
          className="add-to-favorites-button" onClick={() => props.handleAddOrRemoveProductOnFavorites(props.product)}>
          Adicionar aos favoritos
        </button>
      )}


    </Styles.Container>
  );
}
