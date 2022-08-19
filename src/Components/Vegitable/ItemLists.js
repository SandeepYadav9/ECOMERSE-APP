import React, { useEffect, useState } from "react";
import style from "./ItemLists.module.css";
import SortedList from "./SortedList";

const ItemLists = ({
  items,
  addToCartHandler,
  onClickHandler,
  allItems,
  setAllItems,
}) => {
  const [sortValue, setSortValue] = useState();
  let compare = {
    lowestpric: (a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    },
  };
  let compareDes = {
    higestprice: (a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    },
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "lowestpric") {
      items.sort(compare[event.target.value]);
    } else {
      items.sort(compareDes[event.target.value]);
    }
    setSortValue(event.target.value);
    setAllItems(items);
  };
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
              Fruits
            </button>
          </div>
        </div>
      </div>

      <div className={style.sorted}>
        <SortedList
          items={items}
          setAllItems={setAllItems}
          onClickHandler={onClickHandler}
          handleChange={handleChange}
          sortValue={sortValue}
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
                  <button
                    onClick={() => {
                      addToCartHandler(item);
                    }}
                  >
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
