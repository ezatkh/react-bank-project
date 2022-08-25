import React, { Component } from "react";
import "../styles/Operations.css";
import { Link } from "react-router-dom";
class Operations extends Component {
  constructor() {
    super();
    this.state = {
      vendorInput: "",
      categoryInput: "",
      amountInput: "",
    };
  }
  changeVendorInput = (e) => {
    this.setState({
      vendorInput: e.target.value,
    });
  };
  changeCategoryInput = (e) => {
    this.setState({
      categoryInput: e.target.value,
    });
  };
  changeAmountInput = (e) => {
    this.setState({
      amountInput: e.target.value,
    });
  };
  DepositTransactions = () => {
    let newTransaction = {
      amount: parseInt(this.state.amountInput),
      vendor: this.state.vendorInput,
      category: this.state.categoryInput,
    };
    this.props.addTransaction(newTransaction);
  };
  WithdrawTransactions = () => {
    let newTransaction = {
      amount: parseInt(this.state.amountInput) * -1,
      vendor: this.state.vendorInput,
      category: this.state.categoryInput,
    };
    this.props.addTransaction(newTransaction);
  };
  render() {
    return (
      <div className="operations">
        <div className="vendorInput">
          <label>vendor</label>
          <input
            type="text"
            value={this.state.vendorInput}
            onChange={this.changeVendorInput}
          />
        </div>
        <div className="categoryInput">
          <label>category</label>
          <input
            type="text"
            value={this.state.categoryInput}
            onChange={this.changeCategoryInput}
          />
        </div>
        <div className="amountInput">
          <label>amount</label>
          <input
            type="text"
            value={this.state.amountInput}
            onChange={this.changeAmountInput}
          />
        </div>
        <div className="btns">
          <Link to="/">
            <button className="depositBtn" onClick={this.DepositTransactions}>
              Deposit
            </button>
          </Link>
          <Link to="/">
            <button className="withdrawBtn" onClick={this.WithdrawTransactions}>
              Withdraw
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Operations;
