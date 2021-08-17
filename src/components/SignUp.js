import React, { Component } from "react";
import fireBase from "../Firebase/firebase";
import "./Main.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    accountHolderName: "",
    address: "",
    firebaseErrors: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  signUp = (evt) => {
    evt.preventDefault();


    fireBase.auth().createUserWithEmailAndPassword (this.state.email, this.state.password)
      .then((user) => {
        // https://firebase.google.com/docs/auth/
        //createUserWithEmailAndPassword is a built in method\
        let currentUser = fireBase.auth().currentUser;
        // Updates the user attributes:
        currentUser.updateProfile({
          accountHolderName: this.state.accountHolderName,
        });
      })
      .catch((error) => {
        this.setState({ firebaseErrors: error.message });
      });
  };
  render() {

    let errorNotification = this.state.firebaseErrors ? (
      <div className="Error"> {this.state.firebaseErrors} </div>
    ) : null;

    return (
      <>
        {errorNotification}
        <form>
          <input
            type="text"
            className="regField"
            placeholder="Enter your name"
            onChange={this.handleChange}
            value={this.state.accountHolderName}
            name="accountHolderName"
          />

          <input
            type="text"
            className="regField"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <input
            className="regField"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
          />
          <input
            className="regField"
            placeholder="Address"
            onChange={this.handleChange}
            value={this.state.address}
            name="address"
          />
          <input
            onClick={this.signUp}
            value="Sign Up"
            className="submitBtn"
            type="submit"
          />
        </form>
      </>
    );
  }
}
export default SignUp;
