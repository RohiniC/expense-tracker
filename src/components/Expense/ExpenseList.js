import React from 'react';

import './Expense.css';
import ExpenseItem from './Expenseitem';

function Expenses(props) {

    return (<>
        {/* { 
        [<ExpenseItem name={props.expenses[0].name} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>,
        <ExpenseItem name={props.expenses[1].name} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem> ]
        } */}

        {
            props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} name={expense.name} date={expense.date} amount={expense.amount}></ExpenseItem>
            })
        }
    </>);
}
export default Expenses;


