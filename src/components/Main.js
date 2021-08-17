import React, { Component } from 'react'
import fireBase from '../Firebase/firebase';
import Content from './Tracker/Content';
import Login from './Login'
import SignUp from './SignUp';


export default class Main extends Component {
  state = {
    user: 1,
    loading: true,
    switchForm: false
  }

  componentDidMount() {
    this.authListener()
    // console.log(this.authListener)
  }
  authListener() {
    fireBase.auth().onAuthStateChanged(user => {
      //
      if(user) {
        this.setState({user});
      } else {
        this.setState({user: null})
      }
    })
  }
  switchForm = (action) => {
    console.log(action);
    this.setState({
    switchForm:action === 'signUp'? true: false
    })
  }


  render() {
    const form = !this.state.switchForm?<Login /> : <SignUp />

    return (
       <>
      {/* Welcome {this.state.user}! */}
      {! this.state.user ?
        (<div className = "mainBlock">
        {form}
        {!this.state.switchForm?
          (<span className = "underline">
          Sign Up
          <button onClick = {()=> this.switchForm(!this.state.switchForm? 'signUp':'login')}
          className = "linkBtn">Create an account</button>
         </span>):(
           <span className = "underline">
           Already exists
           <button onClick = {()=> this.switchForm(!this.state.switchForm? 'signUp':'login')}
           className = "linkBtn">Sign in here</button>
          </span>
         )
        }
      </div>):(<Content />)
      }


      </>
    )
  }
}
