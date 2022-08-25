const express = require("express");
const Transaction = require("../model/Transaction");
const router = express.Router();

router.get("/transactions", function (request, response) {
  Transaction.find({}).exec(function (error, allTransactions) {
    response.send(allTransactions);
  });
});

router.post("/transaction", function (request, response) {
  let transactionsParameter = request.body;
  let newTransaction = new Transaction({
    amount: transactionsParameter.amount,
    category: transactionsParameter.category,
    vendor: transactionsParameter.vendor,
  });
  newTransaction.save();
  response.send(newTransaction);
});

router.delete("/transaction/:transactionID", function (request, response) {
  let transactionsParameter = request.params.transactionID;
  Transaction.findOneAndDelete({ _id: transactionsParameter }).exec(function (
    error,
    allTransactions
  ) {
    response.send(allTransactions);
  });
});

module.exports = router;
