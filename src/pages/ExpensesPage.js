import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../features/api/api";

import ExpenseRow from "../components/ExpenseRow";

import { useSelector } from "react-redux";

const App = () => {
  let [expenseDate, setExpenseDate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [merchant, setMerchant] = React.useState("");
  const [note, setNote] = React.useState("");
  const [receipt, setReceipt] = React.useState("");

  const [error, setError] = React.useState("");

  const [expenses, setExpenses] = React.useState([]);

  const [newPost, setNewPost] = React.useState(false)

  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  React.useEffect(() => {
    console.log(isAuthenticated);
    if (typeof isAuthenticated !== "undefined" && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  React.useEffect(() => {
    api.get("/expenses").then((response) => {
      console.log("use" + response);
      if (response) {
        setExpenses(response.data);
        setNewPost(false);
      }
    });
  }, [newPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateTime = new Date(expenseDate);
      try {
      api
        .post("/expenses", {
          dateTime,
          category,
          amount,
          paymentMethod,
          merchant,
          note,
          receipt,
        })
        .then((response) => {
          console.log(response.data.status);
          if (response.data.status === "success") {
            setError("Success!!");
            setExpenseDate("");
            setCategory("");
            setAmount("");
            setPaymentMethod("");
            setMerchant("");
            setNote("");
            setReceipt("");
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          if (
            error.response.data.message ===
            "Expense validation failed: userId: Path `userId` is required."
          ) {
            setError("Please login");
          } else {
            setError("Expense post failed");
          }
        });
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setError("Incorrect username/password");
      } else {
        setError("Registration failed. Please try again later.");
      }
    }

    setNewPost(true);
  };

  return (
    <>
      <div className="container-fluid" id="banner">
        <div className="row">
          <div className="col" id="content"></div>
          <div className="col">
            <div id="pic">
              <form onSubmit={handleSubmit}>
                <input
                  type="date"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                  placeholder="Expense Date"
                  required
                />
                <br />
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category"
                  required
                />
                <br />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  required
                />
                <br />
                <input
                  type="text"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  placeholder="Payment Method"
                  required
                />
                <br />
                <input
                  type="text"
                  value={merchant}
                  onChange={(e) => setMerchant(e.target.value)}
                  placeholder="Merchant"
                />
                <br />
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note"
                />
                <br />
                <input
                  type="text"
                  value={receipt}
                  onChange={(e) => setReceipt(e.target.value)}
                  placeholder="Receipt"

                />
                <br />
                <input type="submit" value="Register" />
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-sm">Date</div>
          <div className="col-sm">Amount</div>
          <div className="col-sm">Category</div>
          <div className="col-sm">PaymentMethod</div>
          <div className="col-sm">Merchant</div>
          <div className="col-sm">Note</div>
          <div className="col-sm">Receipt</div>
          <div className="col-sm">Edit/Delete</div>
        </div>
        {expenses.map((expense) => (
          <ExpenseRow expense={expense} onDelete={(expenseId) => {"api call to delete"}} onChange={(updatedExpense) => {"api call to update"}}/>
        ))}
      </div>
    </>
  );
};

export default App;
