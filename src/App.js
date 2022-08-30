import { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expense';


function App() {
  const [isLoggedin, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  const login = () => {
    setLoggedIn(true)
    localStorage.setItem('login', true)
  }
  useEffect(() => {
    console.log('mounted')
    setLoggedIn(localStorage.getItem('login'));
    
    if((email.includes('@') && password.length> 4)) {
      setValid(true);
    }
     return () => console.log('component unmounted');
     
  }, [email, password]);


  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>Expense tracker</h3>
      </header>
      {isLoggedin ? <Expenses /> :
        <form onSubmit={login}>
          <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} />
          <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} />
          {isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}

        </form>
      }
    </div>
  );
}

export default App;


