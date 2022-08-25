import "./App.css";
import React, { Component } from "react";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
  deleteTransaction = (transaction) => {
    let toModefyTransactions = [...this.state.transactions];
    for (let index in toModefyTransactions) {
      if (toModefyTransactions[index].vendor === transaction) {
        toModefyTransactions.splice(index, 1);
        break;
      }
    }
    this.setState({
      transactions: toModefyTransactions,
    });
  };
  render() {
    let totalSum = 0;
    let balance;
    let keys = this.state.transactions.map((key) => {
      totalSum += key.amount;
      return key.vendor;
    });
    if (totalSum > 500) {
      balance = <p className="greenBalance">Balance:{totalSum}</p>;
    } else balance = <p className="redBalance">Balance:{totalSum}</p>;
    return (
      <Router>
        <div className="App">
          <div className="header">
            <p>Ezat khaleeli</p>
            {balance}
          </div>
          <div className="content">
            <div className="innerContent">
              <Route
                path="/"
                exact
                render={() => (
                  <Transactions
                    key={keys}
                    transactions={this.state.transactions}
                    deleteTransaction={this.deleteTransaction}
                  />
                )}
              />

              <Route path="/operation" exact render={() => <Operations />} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
