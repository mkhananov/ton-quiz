import React from "react";
import styles from "./Wrapper.module.scss";
import Coin from "./Coin.jsx";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Coin />
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
