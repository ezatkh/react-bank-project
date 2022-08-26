import React, { Component } from "react";
import "../styles/Transaction.css";
class Transaction extends Component {
  deleteTransaction = () => {
    this.props.deleteTransaction(this.props.transaction._id);
  };
  render() {
    return (
      <div className="transaction">
        <div>{this.props.transaction.vendor}</div>
        <div>{this.props.transaction.category}</div>
        <div>{this.props.transaction.amount}</div>
        <i className="fa fa-trash-o" onClick={this.deleteTransaction}></i>
      </div>
    );
  }
}

export default Transaction;
