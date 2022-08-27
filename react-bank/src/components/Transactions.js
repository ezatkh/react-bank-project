import React, { Component } from "react";
import "../styles/Transactions.css";
import Transaction from "./Transaction";
import { Link } from "react-router-dom";

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      showList: false,
    };
  }
  showList = () => {
    this.setState({
      showList: !this.state.showList,
    });
  };
  render() {
    let displayContent = "";
    if (this.state.showList) {
      displayContent = "block";
    } else displayContent = "none";
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
        <div className="dropdown">
          <button className="dropbtn" onClick={this.showList}>
            Sort by
          </button>
          <ul className="dropdown-content" style={{ display: displayContent }}>
            <Link to="/">
              <div className="element">All Transactions</div>
            </Link>
            <Link to="/catogeries">
              <div className="element">Categories</div>
            </Link>
          </ul>
        </div>
        <div className="headerTransactions">
          <div>Vandor</div>
          <div>Category</div>
          <div>Amount</div>
          <div>Delete</div>
        </div>
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
