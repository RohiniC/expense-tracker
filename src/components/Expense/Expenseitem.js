import React, { useState } from 'react';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.name);
    const [datevar, setDate] = useState(props.date);
    // let title = props.name;
    
    const clickHandler = ()=>{
        setTitle('edited')
        setDate('editedDate')
    };
    return (<div className="Expense_container">
        
        <div className="item">{datevar}</div>
        <div className="item">{title}</div>
        <div className="item">{props.amount}</div>
        <button onClick={clickHandler}>Edit</button>
    </div>);
}
export default ExpenseItem;

