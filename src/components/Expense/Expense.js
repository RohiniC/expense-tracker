import React from 'react';

import './Expense.css';

import { Outlet } from 'react-router-dom';

import ExpenseList from './ExpenseList';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };
    this.intervalId = "";
    console.log(this);
    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler() {
    console.log(this)
    this.setState({
      expenses: [...[{
        id: new Date().getTime(),
        name: 'Groceries',
        date: 'May 23, 2020',
        amount: 'INR 90'
      }], ...this.state.expenses]
    });
    // setExpenses((prevexpenses) => {
    //   return [...[{
    //     id: new Date().getTime(),
    //     name: 'Groceries',
    //     date: 'May 23, 2020',
    //     amount: 'INR 90'
    //   }], ...prevexpenses]
    // });
  }

  componentDidMount() {

    this.intervalId = setInterval(() => {
      fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/expenses').then((response) => {
   
        if (response.ok) {
          return response.json()
        }
        return false;
      }).then((response) => {
        if (response) {
          this.setState({expenses:response});
        }
      })
    }, 1000);



  }
  componentWillUnmount() {
      console.log('unmounted expenses')
      clearInterval(this.intervalId);
  }

  render() {
    return (<div>
     
      {/* <NewExpense onNewExpenseAdded={this.addExpenseHandler} /> */}
      <Outlet />
      <ExpenseList expenses={this.state.expenses} />

      <button onClick={this.clickHandler}>Add Groceries</button>
    </div>);
  }
}







// function Expenses(props) {
//   const expensesData = [];
//   const [expenses, setExpenses] = useState(expensesData);


//   const addExpenseHandler = (expense) => {
//     fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/expenses', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(expense)
//     }).then(res => res.json())
//       .then(res => console.log(res));


//     // setExpenses((prevexpenses) => { return [...[expense], ...prevexpenses] });

//   }

//   useEffect(() => {
//     document.title = "Expenses page"
//     const intervalId = setInterval(() => {
//       fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/expenses').then((response) => {
//         if (response.ok) {
//           return response.json()
//         }
//         return false;
//       }).then((response) => {
//         if (response) {
//           setExpenses(response);
//         }
//       })
//     }, 1000);
//     return () => {
//       console.log('unmounted expenses')
//       clearInterval(intervalId);
//     }
//   }, []);


//   const clickHandler = () => {
//     setExpenses((prevexpenses) => {
//       return [...[{
//         id: new Date().getTime(),
//         name: 'Groceries',
//         date: 'May 23, 2020',
//         amount: 'INR 90'
//       }], ...prevexpenses]
//     });

//   }
//   const logout = () => {
//     props.logout(false)
//   }
//   return (<div>
//     <button onClick={logout}>Log out</button>
//     <NewExpense onNewExpenseAdded={addExpenseHandler} />
//     {/* <NewExpense /> */}
//     <ExpenseList expenses={expenses} />

//     <button onClick={clickHandler}>Add Groceries</button>
//   </div>);
// }
export default Expenses;
