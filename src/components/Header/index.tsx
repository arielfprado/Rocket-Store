import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/conquer-logo.png";

import { FiSearch, FiStar, FiShoppingCart } from "react-icons/fi";

import { Link } from "../../components/Link";

import * as Styles from "./styles";

import { getCategories } from "../../services/categoryContext";

import { ICategoryProps } from "../CategoryCard/types";

import { useSearchParameter } from "../../contexts/useSearch";

export function Header() {
  const navigate = useNavigate();
  const ref: any = useRef();
  const { setSearchParameter } = useSearchParameter();
  const [search, setSearch] = useState("");

  const [inputOpen, setInputOpen] = useState(false);

  const [data, setData] = useState<ICategoryProps[]>();

  useEffect(() => {
    getCategories(0).then((data: ICategoryProps[]) => {
      setData(data);
    });
  }, []);

  const onSearch = () => {
    setSearchParameter(search);
    setInputOpen(false);
    navigate(`/search`);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setInputOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Styles.Container>
      <div className="menu">
        <Link to="/" className="logo">
          <img
            src={Logo}
            alt="Logo da Conquer branco e preto."
            className="logo-img"
          />
          <div>Rocket Store</div>
        </Link>

        <div className="menu-items">
          {data?.map((category) => {
            return (
              <div
                className="item"
                onClick={() => navigate(`/category/${category.url}`)}
              >
                {category.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="menu-icons">
        <div className="item search" ref={ref}>
          {inputOpen && (
            <div className="tooltip">
              <input
                id="inputSearch"
                type="text"
                placeholder="Pesquise um produto"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button>
                <FiSearch
                  className="searchButton"
                  size="20"
                  onClick={() => onSearch()}
                />
              </button>
            </div>
          )}
          <button
            className="search-button"
            onClick={() => setInputOpen(!inputOpen)}
          >
            <FiSearch size="20" />
          </button>
        </div>

        <Link className="item" to="/favorites">
          <FiStar size="20" />
        </Link>

        <Link className="item" to="/shoppingcart">
          <FiShoppingCart size="20" />
        </Link>
      </div>
    </Styles.Container>
  );
}
