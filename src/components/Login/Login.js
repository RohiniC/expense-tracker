import { useEffect, useState } from 'react';


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  const login = () => {
    localStorage.setItem('login', true)
    props.isLoggedin(true);
  }
  
  useEffect(() => {
    console.log('mounted')
    
    if((email.includes('@') && password.length> 4)) {
      setValid(true);
    }

  }, [email, password]);

  useEffect(() => {
        return () => console.log('component unmounted');
  }, []);


  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }


  return (
   
        <form onSubmit={login}>
          <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} />
          <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} />
          {isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}

        </form>
     
  );
}

export default Login;


