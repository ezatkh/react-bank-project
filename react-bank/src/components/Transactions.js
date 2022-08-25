import React, { Component } from "react";
import "../styles/Transactions.css";
import Transaction from "./Transaction";

class Transactions extends Component {
  render() {
    let allTransactions = this.props.transactions.map((transaction) => {
      return (
        <Transaction
          transaction={transaction}
          deleteTransaction={this.props.deleteTransaction}
        />
      );
    });
    return <div className="transactions">{allTransactions}</div>;
  }
}

export default Transactions;
