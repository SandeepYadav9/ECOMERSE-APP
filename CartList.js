import React, { useEffect, useState } from "react";
import deleteIcon from "../../../assests/delete.png";
import style from "./CartList.module.css";
import { useNavigate } from "react-router-dom";

const ItemsList = (props) => {
  const [allItems, setAllItems] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    let fetchData = await fetch(
      "http://localhost:3000/findAll?collectionName=cart"
    );
    let responsData = await fetchData.json();
    props.updateCunter(responsData.data.length);
    setAllItems(responsData.data);
  };

  const deleteCartData = async (item) => {
    let updateData = await fetch(
      "http://localhost:3000/updateItem/?collectionName=items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item.itemId,
        }),
      }
    );

    let fetchData = await fetch(
      "http://localhost:3000/deleteItem?collectionName=cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item._id,
        }),
      }
    );
    let responsData = await fetchData.json();
    props.updateCunter(responsData.data.length);
    setAllItems(responsData.data);
  };

  const onReduceCartQuantity = async (item) => {
    if (item.quantity <= 1) {
      alert("Item are Not avalable");
      return;
    }
    let fetchAllData = await fetch(
      "http://localhost:3000/updateItemDes/?collectionName=cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: item._id }),
      }
    );

    props.updateCunter(item.quantity - 1);
    item.itemId = item._id;
    delete item._id;
    let responseData = await fetchAllData.json();
    setAllItems(responseData.data);
  };

  const onUpdateCartQuantity = async (item) => {
    let fetchAllData = await fetch(
      "http://localhost:3000/updateItem/?collectionName=cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: item._id }),
      }
    );
    props.updateCunter(item.quantity);
    let responseData = await fetchAllData.json();
    setAllItems(responseData.data);
  };
  //

  const deleteAllCartData = async (id) => {
    let fetchData = await fetch(
      "http://localhost:3000/deleteItem?collectionName=cart/{cartId}/cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    let responsData = await fetchData.json();
    props.updateCunter(responsData.data.length);
    setAllItems(responsData.data);
  };
  return (
    <div>
      <div className={style.cart}>
        {allItems.map((item) => {
          return (
            <div>
              <div className={style.itmeContainer} key={item._id}>
                <img src={item.image} alt={item.name} />
                <span className={style.price}> Price: {item.price}</span>
                <div className={style.actionsCart}>
                  <button
                    onClick={() => {
                      onReduceCartQuantity(item);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      onUpdateCartQuantity(item);
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
                  <button onClick={() => deleteCartData(item)}>
                    <img src={deleteIcon} alt="Delete Icon List" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className={style.totalCount}>
          <span>TotalAmount $ {props.count * 40} </span>
          {/* Default setup Total Amount  */}
          <div className={style.actionbutton}>
            <button onClick={() => deleteAllCartData()}>Delete</button>
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

export default ItemsList;
