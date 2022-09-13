import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ExpenseDetail.module.css';

function ExpenseItem(props) {
    const [expense, setExpense] = useState(null);
    const params = useParams();
    const mystyle = {
        color: "yellow",
        backgroundColor: "red"
    }
    useEffect(() => {
        console.log(params.expenseId);
        fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/expenses/' + params.expenseId).then((response) => {

            if (response.ok) {
                return response.json()
            }
            return false;
        }).then((response) => {
            if (response) {
                setExpense(response);
            }
        })
    }, [params.expenseId]);

    return (<>
        {expense && <div className={styles.detailContainer}>
            <div className="item" style={{color:"red", backgroundColor: 'yellow'}}>{expense.date}</div>
            <div className="item" style={mystyle}>{expense.name}</div>
            <div  className={styles.item}>{expense.amount}</div>
            <div className={styles.item}>{expense.description}</div>
        </div>
        }
    </>);
}
export default ExpenseItem;

