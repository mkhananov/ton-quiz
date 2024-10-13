import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import store from "../../store/Store.js";
import present from "../../assets/present.svg?inline";
import styles from "./Present.module.scss";
import { VALUE } from "../../constants.js";
import coin from "../../assets/coin.svg";

const Present = () => {
  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCoins(VALUE.PRESENT);
    }, 300);
  };

  const [isOpen, setIsOpen] = useState(false);
  const { setCoins } = store;
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <Modal
        title={"Welcome!"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <div className={styles.container}>
          <img src={present} alt="present" className={styles.present} />
          <span>
            Present <strong>quitons</strong> from TON Quiz
          </span>
          <div className={styles.coins}>
            <img src={coin} alt="coin" className={styles.coin} />
            {VALUE.PRESENT}
          </div>
          <Button type={"primary"} className={"button"} onClick={close}>
            Let's begin
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Present;
