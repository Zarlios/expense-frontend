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
            type="text"
            value={updatedExpense.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
          />
        ) : (
          amount
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input type="text" value={updatedExpense.category} />
        ) : (
          category
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input type="text" value={updatedExpense.paymentMethod} />
        ) : (
          paymentMethod
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input type="text" value={updatedExpense.paymentMethod} />
        ) : (
          merchant
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input type="text" value={updatedExpense.paymentMethod} />
        ) : (
          note
        )}
      </div>
      <div className="col-sm">
        {editMode ? (
          <input type="text" value={updatedExpense.paymentMethod} />
        ) : (
          receipt
        )}
      </div>
      <div className="col-sm">
        {/* change to  */}
        {editMode ? (
          <>
            <i className="fa fa-cross" onClick={() => setEditMode(false)}></i>
            <i
              className="fa fa-check"
              onClick={() => onUpdate(updatedExpense)}
            ></i>
          </>
        ) : (
          <>
            <i className="fa fa-pencil" onClick={() => setEditMode(true)}></i>
            <i className="fa fa-trash" onClick={() => onDelete(expense._id)}></i>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpenseRow;
