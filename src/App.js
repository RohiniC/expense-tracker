import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

import {
  Routes, Route, Link
} from "react-router-dom";

function App() {
  const [isLoggedin, setLoggedIn] = useState(false);

  const loginHandler = (islogin) => {
    setLoggedIn(islogin);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Expense tracker</h3>
        {isLoggedin &&
          <nav>

            <Link to="/">Logout</Link>
            <Link to="expenses">Expenses</Link>
            <Link to="expenses/new">New Expense</Link>
          </nav>
        }
      </header>
      <Routes>

        <Route index element={<Login isLoggedin={loginHandler} />} />
        <Route path="expenses" element={<Expenses />}>
          <Route path="new" element={<NewExpense />} />
        </Route>
        <Route path="*" element={<NotFound />} />


      </Routes>

      {/* {isLoggedin ? <Expenses logout={loginHandler} /> : <Login isLoggedin={loginHandler} />
      } */}

    </div>
  );
}

export default App;


