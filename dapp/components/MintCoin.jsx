import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "../styles/MintCoin.module.css";
import Image from "next/image";


export const MintCoin = () => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    const limit = e.target.value.includes(".") ? 6 : 5;
    if (e.target.value.length < limit) {
      setAmount(e.target.value.replace(/[^\d.]/g, ""));
    }
  };

  const contribute = async () => {
    if (amount <= 0) {
      return toast.error("You can't Mint zero!");
    }

    // to do, interact with the smart contract here

    setAmount(0);
  };


  return (
    <div className={styles.mint_container}>
      <h3>Buy Stream Coin</h3>
      <div className={styles.action_container}>
        <input
          className={styles.mint-amount}
          placeholder="Amount to Mint..."
          type="text"
          value={amount}
          onChange={handleAmountChange}
        />{" "}
        <span className="fil">FIL</span>
      </div>
      {amount && (
        <>
          <div className={styles.estimate_container}>
            Will get you: {amount * 1} <strong>StrFIL</strong>
          </div>
          <button className={styles.mint_button} onClick={contribute}>
            Buy
          </button>
        </>
      )}
    </div>
  );
};
