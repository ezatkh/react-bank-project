import React, { Component } from "react";
import "../styles/Transactions.css";
import Transaction from "./Transaction";
import { Link } from "react-router-dom";

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
    return (
      <div className="transactions">
        {allTransactions}
        <Link to="/operation">
          <div className="s">
            <button className="btn">Insert transaction</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default Transactions;
