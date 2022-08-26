import React, { useState } from 'react';

import './Expense.css';

import NewExpense from '../NewExpense/NewExpense';
import ExpenseList from './ExpenseList';

// class Expenses extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expenses: []
//     };
//     this.clickHandler = this.clickHandler.bind(this);
//   }
//   addExpenseHandler = (expense) => {
//     // setExpenses((prevexpenses) => { return [...[expense], ...prevexpenses] });
//     // this.setState((prevexpenses) => { return [...[expense], ...prevexpenses] });
//   }
//   clickHandler() {
//     this.setState({
//       expenses: [...[{
//             id: new Date().getTime(),
//             name: 'Groceries',
//             date: 'May 23, 2020',
//             amount: 'INR 90'
//           }], ...this.state.expenses]
//     });
//     // setExpenses((prevexpenses) => {
//     //   return [...[{
//     //     id: new Date().getTime(),
//     //     name: 'Groceries',
//     //     date: 'May 23, 2020',
//     //     amount: 'INR 90'
//     //   }], ...prevexpenses]
//     // });
//   }
//   render() {
//     return (<div>
//       <NewExpense onNewExpenseAdded={this.addExpenseHandler} />
//       {/* <NewExpense /> */}
//       <ExpenseList expenses={this.state.expenses} />
//       <button onClick={this.clickHandler}>Add Groceries</button>
//     </div>);
//   }
// }

function Expenses() {
  const expensesData = [];
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevexpenses) => { return [...[expense], ...prevexpenses] });

  }
  const clickHandler = () => {
    setExpenses((prevexpenses) => {
      return [...[{
        id: new Date().getTime(),
        name: 'Groceries',
        date: 'May 23, 2020',
        amount: 'INR 90'
      }], ...prevexpenses]
    });

  }
  return (<div>
    <NewExpense onNewExpenseAdded={addExpenseHandler} />
    {/* <NewExpense /> */}
    <ExpenseList expenses={expenses} />
    <button onClick={clickHandler}>Add Groceries</button>
  </div>);
}
export default Expenses;
