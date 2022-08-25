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
    let amountInput = this.state.amountInput;
    let vendorInput = this.state.vendorInput;
    let categoryInput = this.state.categoryInput;
    if (amountInput && vendorInput && categoryInput) {
      if (!isNaN(amountInput)) {
        let newTransaction = {
          amount: parseInt(amountInput),
          vendor: vendorInput,
          category: categoryInput,
        };
        this.props.addTransaction(newTransaction);
      } else alert("amount should be a number");
    } else alert("please fill all fields");
  };

  WithdrawTransactions = () => {
    let amountInput = this.state.amountInput;
    let vendorInput = this.state.vendorInput;
    let categoryInput = this.state.categoryInput;
    if (amountInput && vendorInput && categoryInput) {
      if (!isNaN(amountInput)) {
        let newTransaction = {
          amount: parseInt(amountInput) * -1,
          vendor: vendorInput,
          category: categoryInput,
        };
        this.props.addTransaction(newTransaction);
      } else alert("amount should be a number");
    } else alert("please fill all fields");
  };
  render() {
    return (
      <div className="operations">
        <div className="vendorInput in">
          <label>vendor</label>
          <input
            type="text"
            value={this.state.vendorInput}
            onChange={this.changeVendorInput}
          />
        </div>
        <div className="categoryInput in">
          <label>category</label>
          <input
            type="text"
            value={this.state.categoryInput}
            onChange={this.changeCategoryInput}
          />
        </div>
        <div className="amountInput in">
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
