import React from "react";
import styles from "./Coin.module.scss";
import { observer } from "mobx-react-lite";
import store from "../store/Store.js";
import coin from "../assets/coin.svg";
import MotionValue from "./MotionValue.jsx";

const Coin = () => {
  const { coins } = store;
  return (
    <div className={styles.container}>
      <img src={coin} alt="coin" className={styles.coin} />
      <MotionValue value={coins} />
    </div>
  );
};

export default observer(Coin);
