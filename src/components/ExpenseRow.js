import React from "react";

const ExpenseRow = (props) => {
  const { expense, onUpdate, onDelete } = props;
  const {
    expenseDate,
    amount,
    category,
    paymentMethod,
    merchant,
    note,
    receipt,
  } = expense;

  const [editMode, setEditMode] = React.useState(false);
  const [updatedExpense, setUpdatedExpense] = React.useState(expense);
  const handleChange = (field, value) => {
    setUpdatedExpense((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="row">
      <div className="col-sm">
        {editMode ? (
          <input
            type="text"
            value={updatedExpense.expenseDate}
            onChange={(e) => handleChange("expenseDate", e.target.value)}
          />
        ) : (
          expenseDate.toString().slice(0, 10)
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input
            type="number"
            value={updatedExpense.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
          />
        ) : (
          amount
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input
            type="text"
            value={updatedExpense.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
        ) : (
          category
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input
            type="text"
            value={updatedExpense.paymentMethod}
            onChange={(e) => handleChange("paymentMethod", e.target.value)}
          />
        ) : (
          paymentMethod
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input
            type="text"
            value={updatedExpense.merchant}
            onChange={(e) => handleChange("merchant", e.target.value)}
          />
        ) : (
          merchant
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input
            type="text"
            value={updatedExpense.note}
            onChange={(e) => handleChange("note", e.target.value)}
          />
        ) : (
          note
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input
            type="text"
            value={updatedExpense.receipt}
            onChange={(e) => handleChange("receipt", e.target.value)}
          />
        ) : (
          receipt
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <>
            <i className="fa fa-xmark" onClick={() => setEditMode(false)}></i>
            <i
              className="fa fa-check"
              onClick={() => {
                onUpdate(updatedExpense);
                setEditMode(false);
              }}
            ></i>
          </>
        ) : (
          <>
            <i className="fa fa-pencil" onClick={() => setEditMode(true)}></i>
            <i
              className="fa fa-trash"
              onClick={() => onDelete(expense._id)}
            ></i>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpenseRow;
