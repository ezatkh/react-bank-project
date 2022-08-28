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
    this.setState(
      {
        showList: !this.state.showList,
      },
      function () {}
    );
  };
  showTransactions() {
    let allTransactions = this.props.transactions.map((transaction) => {
      return (
        <Transaction
          key={transaction._id}
          transaction={transaction}
          deleteTransaction={this.props.deleteTransaction}
        />
      );
    });
    return allTransactions;
  }
  displayList() {
    let displayContent;
    this.state.showList
      ? (displayContent = "dropdown-content block")
      : (displayContent = "dropdown-content none");
    return displayContent;
  }
  componentDidMount() {
    this.showTransactions();
    this.displayList();
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
    return (
      <div className="transactions">
        <div className="dropdown">
          <button className="dropbtn" onClick={this.showList}>
            Sort by
          </button>
          <ul className={this.displayList()}>
            <Link to="/">
              <div className="element">All Transaction</div>
            </Link>
            <Link to="/catogeries">
              <div className="element">Category</div>
            </Link>
          </ul>
        </div>
        <div className="headerTransactions">
          <div>Vandor</div>
          <div>Category</div>
          <div>Amount</div>
          <div>Delete</div>
        </div>
        {this.showTransactions()}
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
