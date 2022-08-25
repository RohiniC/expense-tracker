import React, { useState } from 'react';
import './NewExpense.css';


function NewExpense(props) {

    const [newexpense, setNewExpense] = useState({
        name: '',
        date: '',
        amount: ''
    });

    const dateHandler = (event) => {
        setNewExpense((previousNewexpense) => {
            return { ...previousNewexpense, date: event.target.value }
        });
    }
    const amountHandler = (event) => {
        setNewExpense((previousNewexpense) => {
            return { ...previousNewexpense, amount: event.target.value }
        });
    }
    const nameHandler = (event) => {
        setNewExpense((previousNewexpense) => {
            return { ...previousNewexpense, name: event.target.value }
        });
    }

    const subjectHandler = (e) => {
        e.preventDefault();
        const addedexpense = { ...newexpense, id: Math.random().toString() }
        props.onNewExpenseAdded(addedexpense);
        setNewExpense({
            name: '',
            date: '',
            amount: ''
        });
    }


return (<div className="New_Expense_container">
    <h3>Add New Expense</h3>
    <form onSubmit={subjectHandler}>
        <input type="text" placeholder="Enter date" value={newexpense.date} onChange={dateHandler} />
        <input type="text" placeholder="Enter name" value={newexpense.name} onChange={nameHandler} />
        <input type="text" placeholder="Enter amount" value={newexpense.amount} onChange={amountHandler} />
        <button type="submit">Submit</button>
    </form>

</div>);
}
export default NewExpense;

