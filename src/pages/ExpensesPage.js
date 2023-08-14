import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../features/api/api"

import { useSelector } from "react-redux";

const App = () => {
  const [expenseDate, setExpenseDate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [merchant, setMerchant] = React.useState("");
  const [note, setNote] = React.useState("");
  const [receipt, setReceipt] = React.useState("");

  const [error, setError] = React.useState("");

  const [expenses, setExpenses] = React.useState([])

  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  React.useEffect(() => {
    console.log(isAuthenticated)
    if (typeof isAuthenticated !== 'undefined' && !isAuthenticated) {
      navigate("/");
    }
    
  },[isAuthenticated])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      api.post("/expenses", { expenseDate, 
        category, amount, paymentMethod, merchant, note, receipt })
        .then((response) => {
          console.log(response.data.status)
          if (response.data.status === "success"){
            setError("Success!!");
            setExpenseDate("");
            setCategory("");
            setAmount("");
            setPaymentMethod("");
            setMerchant("");
            setNote("");
            setReceipt("");
          }
        }).catch((error) => {
          console.log(error.response.data.message)
          if (error.response.data.message === "Expense validation failed: userId: Path `userId` is required.") {
            setError("Please login")
          } else {
            setError("Expense post failed")
          }
        })
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setError("Incorrect username/password");
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <>
    <div className="row">
      <div className="col" id="content">
      </div> 
      <div className="col">
        <div id="pic">
        <h1>Register</h1>
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
                placeholder="Confirm Password"
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
                required
              />
              <br />
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note"
                required
              />
              <br />
              <input
                type="text"
                value={receipt}
                onChange={(e) => setReceipt(e.target.value)}
                placeholder="Receipt"
                required
              />
              <br />
              <input type="submit" value="Register" />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
    <div>
      <h2>Expenses List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            Description: {expense.description}, Amount: {expense.amount}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default App;
