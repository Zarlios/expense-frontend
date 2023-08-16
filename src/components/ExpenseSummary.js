import React from 'react';

const ExpenseSummary = ({ expenses }) => {
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

    const summaryArray = Object.entries(summaryData).map(([category, amount]) => {
      return `${category.charAt(0).toUpperCase() + category.slice(1)} Expenses: $${amount.toFixed(2)}`;
    });

    return summaryArray;
  };

  const summaryArray = handleSummary(expenses);

  return (
    <div>
      <h2>Expense Summary</h2>
      <ul className='expense-summary'>
        {summaryArray.map((summary, index) => (
          <li key={index}>{summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
