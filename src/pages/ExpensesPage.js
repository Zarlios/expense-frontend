import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../features/api/api";

import ExpenseRow from "../components/ExpenseRow";
import ExpenseSummary from "../components/ExpenseSummary";

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

  const [expenses, setExpenses] = React.useState([]);

  const [newPost, setNewPost] = React.useState(false);

  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleSummary = (expenses) => {
    const summaryData = {
      grocery: 0,
      healthcare: 0,
      insurance: 0,
      bill: 0,
      other: 0,
    };

    expenses.forEach((expense) => {
      const { category, amount } = expense;
      if (summaryData.hasOwnProperty(category)) {
        summaryData[category] += amount;
        
      }
    });

    const summaryArray = Object.entries(summaryData).map(
      ([category, amount]) => {
        return `${
          category.charAt(0).toUpperCase() + category.slice(1)
        } Expenses: $${amount.toFixed(2)}`;
      }
    );
    console.log(summaryArray.join("\n"));

    return summaryArray.join("\n");
  };

  React.useEffect(() => {
    if (typeof isAuthenticated !== "undefined" && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  React.useEffect(() => {
    api.get("/expenses").then((response) => {
      if (response) {
        setExpenses(response.data);
        handleSummary(response.data);
      }
      setNewPost(false);
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
            setCategory("Dining");
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
          <div className="col" id="content">
            <ExpenseSummary expenses={expenses} />
          </div>
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
                <select
                  id="category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="dining">Dining</option>
                  <option value="grocery">Grocery</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="insurance">Insurance</option>
                  <option value="bill">Bill</option>
                  <option value="other">Other</option>
                </select>
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
      <div className="data">
        <div className="row border">
          <div className="col-sm">Date</div>
          <div className="col-sm">Amount</div>
          <div className="col-sm">Category</div>
          <div className="col-sm">Payment Method</div>
          <div className="col-sm">Merchant</div>
          <div className="col-sm">Note</div>
          <div className="col-sm">Receipt</div>
          <div className="col-sm"></div>
        </div>
        {expenses.map((expense) => (
          <ExpenseRow
            expense={expense}
            onDelete={(expenseId) => {
              api
                .delete(`/expenses/${expenseId}`)
                .then((response) => {
                  if (response.data) {
                    console.log(response);
                    setNewPost(true);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            onUpdate={(updatedExpense) => {
              api
                .patch("/expenses", updatedExpense)
                .then((response) => {
                  if (response.data) {
                    console.log(response);
                    setNewPost(true);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default App;
