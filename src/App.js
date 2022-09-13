import { useState, useContext } from 'react';
import './App.css';
import Expenses from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Counter from './components/Counter/Counter';
import ExpenseDetail from './components/Expense/ExpenseDetail';
import {
  Routes, Route, Link
} from "react-router-dom";

import { AdminContext } from './user-context';


function App() {
  const adminContext = useContext(AdminContext)
  const [isLoggedin, setLoggedIn] = useState(adminContext);

  const loginHandler = (islogin) => {
    setLoggedIn(islogin);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Expense tracker</h3>
        {isLoggedin.isLoggedin &&
          <nav>

            <Link to="/">Logout</Link>

            <Link to="expenses" className="test">Expenses</Link>
            <Link to="expenses/new">New Expense</Link>
          </nav>
        }
      </header>
      <AdminContext.Provider value={isLoggedin}>
        <Routes>
          <Route index element={<Login isLogged={loginHandler} />} />
          <Route path="expenses" element={<Expenses />}>

            <Route path="new" element={<NewExpense />} />
          </Route>
          <Route path="expenses/:expenseId" element={<ExpenseDetail />} />

          <Route path="newexpense" element={<NewExpense />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AdminContext.Provider>
      {/* {isLoggedin ? <Expenses logout={loginHandler} /> : <Login isLoggedin={loginHandler} />
      } */}

    </div>
  );
}

export default App;


