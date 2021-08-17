import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions'))||[[{"amount":200,category:"Investments",type:"Income",date:"2021-08-15",id:"bd7c87b2-1b39-4153-bc96-256bf0523376"}]];


export const TrackerContext = createContext(initialState);
export const Provider = ({children}) => {
  //useReducer is built in react hook
  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  //Action Creators
  const deleteTrans = (id) => {
    dispatch({type: 'DELETE_TRANSACTION', payload: id});
  }

  const addTrans = (id) => {
    dispatch({type: 'ADD_TRANSACTION', payload: id});
  }
  const balance = transactions.reduce((accum,val) => {
    return (val.type === 'Income'? accum+val.amount: accum-val.amount )
  },0)

  console.log('trans', balance)
  return (
    <TrackerContext.Provider value = {{
      deleteTrans, addTrans,transactions, balance
      }}>
      {children}
    </TrackerContext.Provider>
  )
}
