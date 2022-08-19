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

  // Reduce all price inito total Amount
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
                  <span>Sub Price: </span> <br />
                  <span className={style.price}>
                    {item.price * item.quantity}
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
          <div className={style.actionbutton}>
            {cartItems.length > 0 && (
              <button onClick={() => navigate("/", { replace: true })}>
                Back To Home
              </button>
            )}
          </div>
          <div className={style.totalAmount}>
            {cartItems.length > 0 && <span>TotalAmount $ {totalPrice} </span>}
          </div>
          <div>{cartItems.length === 0 && <div> </div>}</div>

          {/* <button onClick={() => removeAllCartItem()}>Delete</button> */}
        </div>
        {cartItems.length === 0 && (
          <div className={style.emptyCart}>Cart Item is Empty !!</div>
        )}
      </div>
      <div>
        <div className={style.actionbutton}>
          {cartItems.length === 0 && (
            <button onClick={() => navigate("/", { replace: true })}>
              Back To Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartList;
