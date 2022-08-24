import React, { Component } from "react";

class Operations extends Component {
  render() {
    return (
      <div>
        <div className="amountInput">
          <label>amount</label>
          <input type="text" />
        </div>
        <div className="vendorInput">
          <label>vendor</label>
          <input type="text" />
        </div>
        <div className="categoryInput">
          <label>category</label>
          <input type="text" />
        </div>
        <div className="btns">
          <button className="depositBtn">Deposit</button>
          <button className="withdrawBtn">Withdraw</button>
        </div>
      </div>
    );
  }
}

export default Operations;
