import { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isValid: ""
        };
        this.emailHandler= this.emailHandler.bind(this);
    }

    login(e) {
        e.preventDefault();
        localStorage.setItem('login', true)
        this.props.isLoggedin(true);
    }

    componentDidMount() {
        console.log('expense component mounted')
        fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/logi').then((response) => {

            if (response.ok) {
                return response.json()
            }
            return false;
        }).then((response) => {
            if (response) {
                this.props.isLoggedin(true);
            }
        })
    }

    componentDidUpdate(previousProps, previousState) {
        console.log('updated')
        if (previousState.isValid !== true) {
            if ((this.state.email.includes('@') && this.state.password.length > 4)) {
                this.setState((previouseState) => {
                    return { ...previouseState, isValid: true }
                })
            }
        }


    }

    componentWillUnmount() {
       console.log('login component unmounted');
    }


    emailHandler(e) {
        this.setState((previouseState) => {
            return { ...previouseState, email: e.target.value }
        })
    }
    passwordHandler(e) {
        this.setState((previouseState) => {
            return { ...previouseState, password: e.target.value }
        })
    }

    render() {
        console.log('component rendered')
        return (

            <form onSubmit={this.login.bind(this)}>
                <input type="email" placeholder="Enter email" onChange={this.emailHandler} value={this.state.email} />
                <input type="password" placeholder="Enter password" onChange={this.passwordHandler.bind(this)} value={this.state.password} />
                {this.state.isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}

            </form>

        );
    }
}


// function Login(props) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isValid, setValid] = useState(false);

//     const login = (e) => {
//         e.preventDefault();
//         localStorage.setItem('login', true)
//         props.isLoggedin(true);
//     }

//     useEffect(() => {
//         fetch('https://6310299436e6a2a04ee72085.mockapi.io/api/logi').then((response) => {

//             if (response.ok) {
//                 return response.json()
//             }
//             return false;
//         }).then((response) => {
//             if(response) {
//                 props.isLoggedin(true);
//             }
//         })
//     }, [props]);

//     useEffect(() => {
//         console.log('mounted')

//         if ((email.includes('@') && password.length > 4)) {
//             setValid(true);
//         }

//     }, [email, password]);

//     useEffect(() => {
//         return () => console.log('login component unmounted');
//     }, []);


//     const emailHandler = (e) => {
//         setEmail(e.target.value)
//     }
//     const passwordHandler = (e) => {
//         setPassword(e.target.value)
//     }


//     return (

//         <form onSubmit={login}>
//             <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} />
//             <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} />
//             {isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}

//         </form>

//     );
// }

export default Login;


