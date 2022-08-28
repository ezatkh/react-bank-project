import React from "react";
import "../styles/Transaction.css";

const TransactionFunction = ({ transaction, deleteTransaction }) => {
  const getColorClass = () =>
    transaction.amount > 0 ? "greenAmount" : "redAmount";
  return (
    <div className="transaction">
      <div>{transaction.vendor}</div>
      <div>{transaction.category}</div>
      <div className={getColorClass()}>{transaction.amount}</div>
      <i
        className="fa fa-trash-o"
        onClick={() => deleteTransaction(transaction._id)}
      ></i>
    </div>
  );
};

export default TransactionFunction;
