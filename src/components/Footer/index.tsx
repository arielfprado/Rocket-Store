import * as Styles from "./styles";
import { Link } from "../Link";
import { Header } from "../Header/index";

export function Footer() {
  return (
    <Styles.Container>
      <div className="container">
        <Link to="/" className="title-container">
          Rocket Store
        </Link>

        <div className="footer-items">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/favorites" className="item">
            Favoritos
          </Link>
          <Link to="/products" className="item">
            Produtos
          </Link>
          <Link to="/shoppingcart" className="item">
            Carrinho de compras
          </Link>
          <Link to="/orders" className="item">
            Meus pedidos
          </Link>
        </div>
      </div>
    </Styles.Container>
  );
}
