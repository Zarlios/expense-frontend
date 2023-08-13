import React from "react";

const App = () => {
  const [expenseDate, setExpenseDate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [merchant, setMerchant] = React.useState("");
  const [note, setNote] = React.useState("");
  const [receipt, setReceipt] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      api.post("/expense", { userId, expenseDate, category, amount, paymentMethod, merchant, note, receipt }).then((response) => {

       });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Incorrect username/password");
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div className="row">
      <div className="col" id="content">
      </div> 
      <div className="col">
        <div id="pic">
        <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                placeholder="Username"
                required
              />
              <br />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Password"
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
  );
};

export default App;
