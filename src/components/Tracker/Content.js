// import React,{useState} from 'react';
import fireBase from '../../Firebase/firebase'
import {Grid} from '@material-ui/core';
// import {v4 as uuid4} from 'uuid';
import ExpenseTracker  from './ExpenseTracker';
import useStyles from '../../appStyles';
import { TrackerMain } from './TrackerMain/TrackerMain';


const initialState = {
  amount: ' ',
  category:'',
  type: '',
  date: new Date(),
  // currentId:fireBase.auth().currentUser.uid
}
console.log('state', initialState)
const Content = ()=> {
  const classes = useStyles();
  // // const[currentId] = React.useState(fireBase.auth().currentUser.uid);
  // // const state = {amount:" ",category:"",type:"",date:"",currentId:fireBase.auth().currentUser.ui}
  // const [formData, setFormData] = useState(initialState)
  // const createUser = () =>  {
  //   const user ={...formData, currentUser:uuid4()}
  //   console.log('user',user)
  // }
  const logout = () => {
      fireBase.auth().signOut();
    }

  return (
    <> <button onClick = {logout}>Logout</button>
        <div className = "welcome">
          <span> Hello, Welcome! </span>
        </div>
        <div >
        <Grid className = {classes.grid}container spacing = {0} alignItems = "center" justify = "center" style = {{height:'50vh'}}  >
          <Grid item xs ={12} sm ={4} className = {classes.mobile}>
            <ExpenseTracker title = "Income" />$
          </Grid>
          <Grid item xs ={12} sm ={3} className = {classes.main}><TrackerMain/>  </Grid>
          <Grid item xs ={12} sm ={4} className = {classes.desktop}>
            <ExpenseTracker title = "Income" />$
          </Grid>
          <Grid item xs ={12} sm ={4}> <ExpenseTracker title = "Expenses"/>$ </Grid>
        </Grid>
      </div>
  </>
  )
}
export default Content