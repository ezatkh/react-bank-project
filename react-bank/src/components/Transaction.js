import React, { Component } from "react";

class Transaction extends Component {
  render() {
    return (
      <div className="transaction">
        <p>amount: {this.props.transaction.amount}</p>
        <p>vendor: {this.props.transaction.vendor}</p>
        <p>category: {this.props.transaction.category}</p>
        <i className="fa fa-trash-o"></i>
      </div>
    );
  }
}

export default Transaction;
