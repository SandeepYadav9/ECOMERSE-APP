import React, { useState } from "react";
import Header from "./Components/Header/Header";
import data from "./items";

import EcomerseNavigator from "./Navigator/EcomerseNavigator";
const Ecomers = (props) => {
  const { items } = data;

  const [cartItems, setCartItems] = useState([]);
  const [allItems, setAllItems] = useState(items);

  const addToCartHandler = (cartList) => {
    // All Ready have item in Cart
    const cartListsEx = cartItems.find((list) => list.id === cartList.id);
    // if all ready have item
    if (cartListsEx) {
      setCartItems(
        cartItems.map((list) =>
          list.id === cartList.id
            ? { ...cartListsEx, quantity: cartListsEx.quantity + 1 }
            : list
        )
      );
    } else {
      setCartItems([...cartItems, { ...cartList, quantity: 1 }]);
    }
  };
// Remove  one By one Cart Items

  const removeToCartHandler = (cartList) => {
    const cartListsEx = cartItems.find((list) => list.id === cartList.id);

    if (cartListsEx.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== cartList.id)); 
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartList.id
            ? { ...cartListsEx, quantity: cartListsEx.quantity - 1 }
            : item
        )
      );
    }
  };

  //Delete all Lists 
  const removeAllCartItem = () => {
    setCartItems([]);
  };


  // Filtered via Category 
  const onClickHandler = (category) => {
    // let filteredItems = [];
    if (category === "all") {
      setAllItems(items);
    } else {
      let filteredItems = items.filter((element) => {
        if (element.category === category) {
          return element;
        }
      });

      setAllItems(filteredItems);
    }
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <EcomerseNavigator
        removeAllCartItem={removeAllCartItem}
        removeToCartHandler={removeToCartHandler}
        addToCartHandler={addToCartHandler}
        items={items}
        cartItems={cartItems}
        onClickHandler={onClickHandler}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </div>
  );
};

export default Ecomers;
