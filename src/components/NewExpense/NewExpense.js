import React, { useState } from 'react';
import './NewExpense.css';
import { useNavigate } from 'react-router-dom'

function NewExpense(props) {
    const navigate = useNavigate();
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

        fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/expenses', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedexpense)
        }).then(res => res.json())
            .then(res => navigate('/expenses'));
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

