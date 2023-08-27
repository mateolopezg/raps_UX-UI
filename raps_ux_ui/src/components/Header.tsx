import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import image from "../assets/logo-planter.png";
import "./Home.css";
import CartIcon from "./CartIcon"; // Importa el componente CartIcon

interface HeaderProps {
  cartCount: number; // Define la prop cartCount en el tipo HeaderProps
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <>
      <nav className="navbar bg-base-100 fixed top-0 z-50">
        <header className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              {/* <li>
            <Link to="/social-media">Social Media</Link>
          </li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="navbar-center">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={image} />
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="m-5">
            <CartIcon count={cartCount} />{" "}
            {/* Muestra el contador del carrito */}
          </div>
          <div className="indicator">
            <LanguageSwitcher /> {/* Language switcher component */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
