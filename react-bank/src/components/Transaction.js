import React, { Component } from "react";
import "../styles/Transaction.css";
class Transaction extends Component {
  render() {
    return (
      <div className="transaction">
        <div>{this.props.transaction.vendor}</div>
        <div>{this.props.transaction.category}</div>
        <div>{this.props.transaction.amount}</div>
        <i className="fa fa-trash-o"></i>
      </div>
    );
  }
}

export default Transaction;
