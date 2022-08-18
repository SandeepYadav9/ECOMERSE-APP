import React, { useEffect, useState } from "react";

import style from "./SortedList.module.css";

const SortedList = ({ items, setAllItems, onClickHandler ,addToCartHandler}) => {
  const [sortValue, setSortValue] = useState();

  let compare = {
    lowestpric: (a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    },
    higestprice: (a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    },
  };
  const handleChange = (event) => {
    items.sort(compare[event.target.value]);
    setSortValue(event.target.value);
    // setAllItems(items)
    onClickHandler(items);
    setAllItems(items);
    
    // setSortedPrice(sortedPrice.price)
  };
  useEffect(() => {
    
  }, []);
  return (
    <div className={style.container}>
      <div className={style.sortedList}>
        <select value={sortValue} onChange={(ev) => handleChange(ev)}>
          <option value="lowestpric" selected>
            SortedBy Price: <span className={style.price}>Low to High </span>{" "}
          </option>
          <option value="higestprice">
            SortedBy Price: <span className={style.price}> High to Low </span>{" "}
          </option>
        </select>
        {/* <select name="Filterd By" id="Filterd">
          <option value="Filterd By" >Green</option>
          <option value="Red" selected>Red</option>
        </select> */}
      </div>
    </div>
  );
};

export default SortedList;
