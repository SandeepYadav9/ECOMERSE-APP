import React, { useEffect, useState } from "react";
import style from "./ItemsList.module.css";
import SortedList from "../../Home/SortedList";
const ItemsList = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [category, setCategory] = useState("all");

  // Update your category
  const onClickHandler = async (category) => {
    setCategory(category);
    let fetchData = {};
    if (category === "all") {
      fetchData = await fetch(
        "http://localhost:3000/findAll?collectionName=items"
      );
    } else {
      fetchData = await fetch(
        `http://localhost:3000/findAllByCatogery?collectionName=items&category=${category}`
      );
    }
    let responsData = await fetchData.json();
    setAllItems(responsData.data);
  };

  useEffect(() => {
    onClickHandler("all");
    fetchCartData();
  }, []);

  // Get all Data
  const fetchCartData = async () => {
    let fetchData = await fetch(
      "http://localhost:3000/findAll?collectionName=cart"
    );
    let responsData = await fetchData.json();
    props.updateCunter(responsData.data.length);
  };

  // Add Vegetable toCart
  const addToCart = async (item) => {
    if (item.quantity <= 0) {
      alert("Item are Not avalable");
      return;
    }

    let updateData = await fetch(
      "http://localhost:3000/updateItemDes/?collectionName=items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item._id,
        }),
      }
    );
    props.updateCunter(item.quantity); // Update quentety
    item.itemId = item._id;
    delete item._id;
    //  item.quantity = 1;
    //
    ////// Call FindOneById
    let findOne = await fetch(
      "http://localhost:3000/findOneById/?collectionName=items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item._id,
        }),
      }
    );

    let responseData = await findOne.json();
    console.log(responseData);
// What getting data 

    let fetchAllData = await fetch(
      "http://localhost:3000/insertItem/?collectionName=cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    onClickHandler(category);
    // let responseData = await updateData.json();
    //  setAllItems(responseData.data);
  };

  const onUpdateQuantity = async (item) => {
    console.log('item', item)
    let fetchAllData = await fetch(
      "http://localhost:3000/updateItem/?collectionName=items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: item._id }),
      }
    );
    // let responseData = await fetchAllData.json();
    // setAllItems(responseData.data);
    onClickHandler(category);
  };

  const onReduceQuantity = async (item) => {
    if (item.quantity <= 0) {
      alert("Item are Not avalable");
      return;
    }
    let fetchAllData = await fetch(
      "http://localhost:3000/updateItemDes/?collectionName=items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: item._id }),
      }
    );
    // let responseData = await fetchAllData.json();
    // setAllItems(responseData.data);
    onClickHandler(category);
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
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRb0swUW-Xu9J4xxucM-w3k1MUCbyp9nuTHn6X1ohLdH_wqws6tdow4VV-OrSbqTaPmFOtgNlrTVg&usqp=CAc"
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
        <SortedList />
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
                <div className={style.actions}>
                  <button
                    onClick={() => {
                      onReduceQuantity(item);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      onUpdateQuantity(item);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className={style.addActions}>
                  <button onClick={() => addToCart(item)}>AddToCart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
