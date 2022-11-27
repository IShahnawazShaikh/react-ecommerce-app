import React from "react";
import styles from "./ProductCard.module.css";
export default function ProductCard(props) {
  // console.log(props);

  return (
    <div className={styles.card}>
      <h1>{props.data.name}</h1>
      <h5>{props.data.price}</h5>
    </div>
  );
}
