import React, {Component} from 'react';
import fireBase from '../Firebase/firebase';
// import './Main.css'
import '../index.css'

class Login extends Component {
    state = {
        email: '',
        password: '',
        firebaseErrors:''
    }

    login = evt => {
        evt.preventDefault();
        //signInWithEmailAndPassword  firebase method
        fireBase.auth().signInWithEmailAndPassword (this.state.email, this.state.password)
        .catch((error) => {
            this.setState({firebaseErrors: error.message})
        });
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        let errorNotification = this.state.firebaseErrors ?
            ( <div className="Error"> {this.state.firebaseErrors} </div> ) : null;


        return (
            <>
                {errorNotification}
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        />
                    <input
                        className="regField"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                    />
                    <input className="submitBtn" type="submit" onClick={this.login} value="ENTER" />
                </form>
            </>
        );
    }
}
export default Login;