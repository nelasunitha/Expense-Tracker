import React, { useState,useContext } from "react";
import {TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./formStyle";
import { TrackerContext } from "../../../store/context";
import {v4 as uuid4} from 'uuid';
import { expenseCatg, incomeCatg } from "../../categoryTypes";
import './style'

const initialState = {
  amount: ' ',
  category:'',
  type: '',
  date: new Date(),
}


export default function Form() {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState)
  const { addTrans} = useContext(TrackerContext);
  const createTrans = ()=> {
    const transaction = {...formData, amount: Number(formData.amount), id:uuid4() }

    addTrans(transaction);
    setFormData(initialState);
  }
  console.log(formData);

  const categoryType = formData.type === 'Income'?incomeCatg: expenseCatg
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="subtitle2"
          gutterBottom
        ></Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value ={formData.type} onChange ={(evt)=> setFormData({...formData,type: evt.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value = {formData.category} onChange ={(evt)=> setFormData({...formData,category: evt.target.value })}>
            {categoryType.map((cat)=> <MenuItem key={cat.type} value ={cat.type}>{cat.type}
              <img src = {cat.icon.default} alt = {cat.type} style = {{width: '40px'}} />
            </MenuItem>  )}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth value ={formData.amount} onChange ={(evt)=> setFormData({...formData, amount: evt.target.value })}/>
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value ={formData.date} onChange ={(evt)=> setFormData({...formData, date: evt.target.value })} />
      </Grid>
      <div className="latestTransactions">
        <Button className ={classes.button} variant ="outlined" color = "secondary" fullWidth value ={formData.amount}    onClick ={createTrans}>Add Transaction</Button>
      </div>

    </Grid>


  );
}
