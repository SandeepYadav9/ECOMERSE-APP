import React from "react";
import Vegitable from "../Components/Vegitable/ItemLists";
import { Routes, Route } from "react-router-dom";
import CartList from "../Components/Cart/CartList";

const EcomerseNavigator = ({
  items,
  cartItems,
  addToCartHandler,
  removeToCartHandler,
  removeAllCartItem,
  onClickHandler,
  allItems,
  setCount,
  count,
  setAllItems,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Vegitable
            setAllItems={setAllItems}
            count={count}
            setCount={setCount}
            allItems={allItems}
            onClickHandler={onClickHandler}
            items={items}
            removeToCartHandler={removeToCartHandler}
            addToCartHandler={addToCartHandler}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartList
            removeAllCartItem={removeAllCartItem}
            cartItems={cartItems}
            addToCartHandler={addToCartHandler}
            removeToCartHandler={removeToCartHandler}
          />
        }
      />
    </Routes>
  );
};

export default EcomerseNavigator;
