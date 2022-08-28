import "./App.css";
import React, { Component } from "react";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import Catogeries from "./components/Catogeries";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  async postTransactionsToDB(newTransaction) {
    axios.post(`http://localhost:8000/transaction`, newTransaction);
  }
  async getTransactionsFromDB() {
    return axios.get("http://localhost:8000/transactions");
  }
  async deleteTransactionsFromDB(id) {
    await axios.delete(`http://localhost:8000/transaction/${id}`);
  }

  async componentDidMount() {
    const transactionsInfo = await this.getTransactionsFromDB();
    this.setState({ transactions: transactionsInfo.data });
  }
  async componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    let totalSum = 0;
    let balance;
    let keys = this.state.transactions.map((key) => {
      totalSum += key.amount;
      return key._id;
    });
    if (totalSum > 500) {
      balance = (
        <p className="greenBalance">
          <span>Balance:</span>
          {totalSum}
        </p>
      );
    } else
      balance = (
        <p className="redBalance">
          <span>Balance:</span>
          {totalSum}
        </p>
      );
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
                    deleteTransaction={this.deleteTransactionsFromDB}
                  />
                )}
              />

              <Route
                path="/operation"
                exact
                render={() => (
                  <Operations addTransaction={this.postTransactionsToDB} />
                )}
              />

              <Route
                path="/catogeries"
                exact
                render={() => (
                  <Catogeries transactions={this.state.transactions} />
                )}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
