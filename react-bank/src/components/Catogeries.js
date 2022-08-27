import React, { Component } from "react";
import "../styles/Category.css";
class Catogeries extends Component {
  render() {
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
    );
  }
}
export default Catogeries;
