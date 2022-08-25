import "./App.css";
import React, { Component } from "react";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" },
      ],
    };
  }
  render() {
    let totalSum = 0;
    let keys = this.state.transactions.map((key) => {
      totalSum += key.amount;
      return key.vendor;
    });
    return (
      <div className="App">
        <div className="header">
          <p>Ezat khaleeli</p>
          <p>Transactions Amount: {totalSum}</p>
        </div>
        <div className="content">
          <div className="innerContent">
            <Transactions key={keys} transactions={this.state.transactions} />
            <Operations />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
