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
  displayList() {
    let displayContent;
    this.state.showList
      ? (displayContent = "dropdown-content block")
      : (displayContent = "dropdown-content none");
    return displayContent;
  }
  showList = () => {
    this.setState({
      showList: !this.state.showList,
    });
  };
  componentDidMount() {
    this.getCateries();
    this.displayList();
  }
  getCateries = () => {
    let categories = {};
    this.props.transactions.map((transaction) => {
      categories[transaction.category.toLowerCase()] =
        (categories[transaction.category.toLowerCase()] || 0) +
        transaction.amount;
    });
    return categories;
  };
  render() {
    let categories = this.getCateries();
    return (
      <div className="categories">
        <div className="dropdown">
          <button className="dropbtn" onClick={this.showList}>
            Sort by
          </button>
          <ul className={this.displayList()}>
            <Link to="/">
              <div className="element">Transaction</div>
            </Link>
            <Link to="/catogeries">
              <div className="element">Category</div>
            </Link>
          </ul>
        </div>
        <div className="allCategories">
          <div className="category header">
            <div className="name">Category</div>
            <div>mount</div>
          </div>
          {Object.keys(categories).map((oneCategory) => (
            <div className="category">
              <div className="name">{oneCategory}</div>
              <div className="Amount">{categories[oneCategory]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Catogeries;
