import React, { useEffect } from "react";

import style from "./SortedList.module.css";

const SortedList = ({ handleChange, sortValue }) => {
  useEffect(() => {}, []);
  return (
    <div className={style.container}>
      <div className={style.sortedList}>
        <select value={sortValue} onChange={(ev) => handleChange(ev)}>
          <option value="lowestpric">
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
