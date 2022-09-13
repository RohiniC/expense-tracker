import React from 'react';
import { Link } from 'react-router-dom'
// class ExpenseItem extends Component {
//     render() {
//         return (<div className="Expense_container" >
//             <div className="item">{this.props.date}</div>
//             <div className="item">{this.props.name}</div>
//             <div className="item">{this.props.amount}</div>
//         </div>);
//     }
// }




function ExpenseItem(props) {
   return (<Link className="Expense_container" to={props.id}>
        <div className="item">{props.date}</div>
        <div className="item">{props.name}</div>
        <div className="item">{props.amount}</div>
    </Link>);
}
export default ExpenseItem;

