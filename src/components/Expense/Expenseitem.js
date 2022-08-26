import React, { Component } from 'react';

class ExpenseItem extends Component {
    render() {
        return (<div className="Expense_container">
            <div className="item">{this.props.date}</div>
            <div className="item">{this.props.name}</div>
            <div className="item">{this.props.amount}</div>
        </div>);
    }
}




// function ExpenseItem(props) {
//    return (<div className="Expense_container">
//         <div className="item">{props.date}</div>
//         <div className="item">{props.name}</div>
//         <div className="item">{props.amount}</div>
//     </div>);
// }
export default ExpenseItem;

