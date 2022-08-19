import React from "react";
import style from "./CartIcon.module.css";
import imageIcon from "../assests/images.png";
import { NavLink } from "react-router-dom";
const CartIcon = () => {
  return (
    <NavLink to="/cart" className={style.cartIcon}>
      <img className={style.icon} src={imageIcon} alt="CartIcon" />
    </NavLink>
  );
};

export default CartIcon;
