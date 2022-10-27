import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Products } from "../pages/Products";
import { Checkout } from "../pages/Checkout";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { ProductDetail } from "../pages/ProductDetail";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Search } from "../pages/Search";
import { CategoryProducts } from "../pages/CategoryProducts";
import { OrderDetail } from "../pages/OrderDetail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/:favoritespage" element={<Favorites />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category/:categoryUrl" element={<CategoryProducts />} />
        <Route path="/orderDetails/:id" element={<OrderDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
