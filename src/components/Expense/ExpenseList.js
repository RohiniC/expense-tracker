import React from 'react';

import './Expense.css';
import ExpenseItem from './Expenseitem';

function Expenses(props) {
    
    // let expense = <div className="Expense_container"><p>No expenses found</p></div>;
    // if(props.expenses.length > 0) {
    //     expense = (props.expenses.map((expense) => {
    //         return <ExpenseItem key={expense.id} name={expense.name} date={expense.date} amount={expense.amount}></ExpenseItem>
    //     })) 
    // }

    return (<>
        {/* { 
        [<ExpenseItem name={props.expenses[0].name} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>,
        <ExpenseItem name={props.expenses[1].name} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem> ]
        } */}

        {
            (props.expenses.length === 0 || props.expenses.length < 2) && <p>Please add expenses</p>
        }
        {
            props.expenses.length > 0 ? (props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} id={expense.id} name={expense.name} date={expense.date} amount={expense.amount}></ExpenseItem>
            })) : <div className="Expense_container"><p>No expenses found</p></div>
        }
    </>);
}
export default Expenses;


