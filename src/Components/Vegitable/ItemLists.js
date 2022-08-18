import React, { useEffect, useState } from "react";
import style from "./ItemLists.module.css";
import SortedList from "./SortedList";
import { useNavigate } from "react-router-dom";
import data from "../../items";

const ItemLists = ({
  items,
  removeToCartHandler,
  addToCartHandler,
  cartItems,
  onClickHandler,
  allItems,
  count,
  setCount,
  setAllItems,
}) => {
  let navigate = useNavigate();

  // const onClickHandler = (category) => {
  //   let filteredItems = [];
  //   if (category === "all") {
  //     addToCartHandler(items)

  //   } else {
  //     filteredItems = items.filter((element) => {
  //       if (element.category === category) {
  //         console.log(element)
  //         return element;
  //       }
  //     });
  //     addToCartHandler(filteredItems);
  //   }
  // };
  // const onClickAddHandler = (item) => {
  //   setCount(count + 1);
  //   addToCartHandler(item);
  // };
  // const onClickDecriseHandler = (item) => {
  //   if (count <= 0) {
  //     alert("Somthing Went worng !!");
  //     return;
  //   }

  //   setCount(count - 1);
  //   removeToCartHandler(item);
  // };
  // let itemQuentety= setCount(count+1)
  useEffect(() => {}, []);
  return (
    <div>
      <div className={style.navContainer}>
        <div>
          <div className={style.allList}>
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRb0swUW-Xu9J4xxucM-w3k1MUCbyp9nuTHn6X1ohLdH_wqws6tdow4VV-OrSbqTaPmFOtgNlrTVg&usqp=CAc"
              alt="image list"
            />
          </div>

          <div>
            <button
              onClick={() => onClickHandler("all")}
              className={style.navigateButton}
            >
              All
            </button>
          </div>
        </div>
        <div className={style.vegitables}>
          <img
            src="https://t3.ftcdn.net/jpg/01/91/55/42/360_F_191554261_Kfn9mPkFP2lRmNuSkLkoe6yMnOdC1GUC.jpg"
            alt="image list"
          />
          <div>
            <button
              className={style.navigateButton}
              onClick={() => onClickHandler("vegetable")}
            >
              Vegetable
            </button>
          </div>
        </div>
        <div className={style.froots}>
          <img
            src="https://media.istockphoto.com/photos/orange-isolated-on-white-background-clipping-path-full-depth-of-field-picture-id1194662606?k=20&m=1194662606&s=612x612&w=0&h=Q3bHkLexn71hPlUJQSPhazlJiL-xpeVGwOAFwO67WcU="
            alt="image list"
          />
          <div>
            <button
              className={style.navigateButton}
              onClick={() => onClickHandler("fruit")}
            >
              Fruit
            </button>
          </div>
        </div>
      </div>

      <div className={style.sorted}>
        <SortedList
          items={items}
          setAllItems={setAllItems}
          onClickHandler={onClickHandler}
        />
      </div>

      <div className={style.cart}>
        {allItems.map((item) => {
          return (
            <div>
              <div className={style.itmeContainer} key={item._id}>
                <img src={item.image} alt={item.name} /> <br />
                <span className={style.name}>{item.name} </span> <br />
                <span className={style.price}> Price: ${item.price} </span>{" "}
                <br />
                {/* <div className={style.actions}>
                  <button
                    onClick={() => {
                      onClickDecriseHandler(item);
                    }}
                  >
                    -
                  </button>
                  <span>{itemQuentety}</span>
                  <button
                    onClick={() => {
                      onClickAddHandler(item);
                    }}
                  >
                    +
                  </button>
                </div> */}
                <div className={style.addActions}>
                  <button onClick={() => addToCartHandler(item)}>
                    AddToCart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemLists;
