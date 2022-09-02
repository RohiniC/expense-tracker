import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expense';
import Login from './components/Login/Login';

function App() {
  const [isLoggedin, setLoggedIn] = useState(false);

  const loginHandler = (islogin) => {
    setLoggedIn(islogin);
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h3>Expense tracker</h3>
      </header>
      {isLoggedin ? <Expenses logout={loginHandler}/> : <Login isLoggedin={loginHandler}/>
      }
      
    </div>
  );
}

export default App;


