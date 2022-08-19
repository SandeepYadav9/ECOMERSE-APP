import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";

import style from "./Header.module.css";

const Header = ({ cartItems }) => {
  return (
    <header className={style.header}>
      <NavLink to="/" className={style.cart}>
        <h3>Shopping Cart</h3>
      </NavLink>

      <div>
        <NavLink to="/cart" className={style.cart}>
          <CartIcon />
          <span className={style.budge}>
            {cartItems.length === 0 ? "" : cartItems.length}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
