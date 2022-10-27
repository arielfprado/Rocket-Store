import * as Styles from './styles';
import { IAddCartProps } from './types';

export function AddCart(props: IAddCartProps) {
  return (
    <Styles.Container>

      {props.inShoppingCart ? (
        <button title ="Adicionado ao carrinho" className="add-to-shopping-cart-button">
          Adicionado ao carrinho
        </button>) : (
          <button title ="Adicionar ao carrinho" className="add-to-shopping-cart-button" onClick={() => {props.handleAddProductOnShoppingCart(props.scproduct);
            }}>
            Adicionar ao carrinho
          </button>
        )
    
    }
        

    </Styles.Container>
  );
}
