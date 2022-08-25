import React, { useState } from 'react';

import './Expense.css';

import NewExpense from '../NewExpense/NewExpense';
import ExpenseList from './ExpenseList';

function Expenses() {
  const expensesData = [];
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevexpenses) => { return [...[expense], ...prevexpenses] });

  }
  const clickHandler = () => {
    setExpenses((prevexpenses) => { return [...[ {
      id: new Date().getTime(),
      name: 'Groceries',
      date: 'May 23, 2020',
      amount: 'INR 90'
    }], ...prevexpenses] });
   
  }
  return (<div >
    <NewExpense onNewExpenseAdded={addExpenseHandler} />
    {/* <NewExpense /> */}
    <ExpenseList expenses={expenses} />
    <button onClick={clickHandler}>Add Groceries</button>
  </div>);
}
export default Expenses;
