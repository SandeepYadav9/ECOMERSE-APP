import React from "react";
import style from "./CartList.module.css";
import deleteIcon from "../assests/delete.png";
import { useNavigate } from "react-router-dom";
const CartList = ({
  cartItems,
  addToCartHandler,
  removeToCartHandler,
  removeAllCartItem,
}) => {
  let navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div className={style.cart}>
        {cartItems.map((item) => {
          return (
            <div>
              <div className={style.itmeContainer} key={item._id}>
                <img src={item.image} alt={item.name} />
                <span className={style.price}> Price: {item.price}</span>
                <div className={style.actionsCart}>
                  <button
                    onClick={() => {
                      removeToCartHandler(item);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      addToCartHandler(item);
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className={style.price}>
                    Sub Price: {item.price * item.quantity}
                  </span>
                </div>
                <div className={style.actions}>
                  <button onClick={() => removeToCartHandler(item)}>
                    <img src={deleteIcon} alt="Delete Icon List" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className={style.totalCount}>
          <span>TotalAmount $ {totalPrice} </span>
          {/* Default setup Total Amount  */}
          <div className={style.actionbutton}>
            <button onClick={() => removeAllCartItem()}>Delete</button>
            {/* Somthing Missing  */}
            <button onClick={() => navigate("/", { replace: true })}>
              Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
