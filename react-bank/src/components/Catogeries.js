import React, { Component } from "react";
import "../styles/Category.css";
import { Link } from "react-router-dom";
class Catogeries extends Component {
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
    let categories = {};
    this.props.transactions.map((transaction) => {
      if (categories[transaction.category.toLowerCase()]) {
        categories[transaction.category.toLowerCase()] += transaction.amount;
      } else {
        categories[transaction.category.toLowerCase()] = transaction.amount;
      }
    });
    return (
      <div className="categories">
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
        <div className="allCategories">
          <div className="category header">
            <div className="name">Name</div>
            <div>mount</div>
          </div>
          {Object.keys(categories).map((oneCategory) => (
            <div className="category">
              <div className="name">{oneCategory}</div>
              <div>{categories[oneCategory]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Catogeries;
