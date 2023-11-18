import React from "react";
import Transaction from "./Transaction";
import "./transactionItem.css";

const TransactionItem = ({ transaction, onDelete }) => {
  const { name, amount, type } = transaction;

  return (
    <div className="transactictionItems">
      <li>
        <Transaction
          name={name}
          amount={amount}
          type={type}
          onDelete={onDelete}
        />
      </li>
    </div>
  );
};

export default TransactionItem;
