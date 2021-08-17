  import React,{useContext} from 'react';
  import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
  import {Delete, Money} from '@material-ui/icons';
  import { TrackerContext } from '../../store/context';
  import useStyles from './listStyle';


  const List = () => {
    const classes = useStyles();
    const {deleteTrans,transactions  } = useContext(TrackerContext);

    return (
      <MUIList dense = {false} className ={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction ="down" in mountOnEnter unmountOnExit key ={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className = {transaction.type === 'Income'? classes.avatarIncome: classes.avatarExpense}>
                  <Money/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary ={transaction.category} secondary ={`$${transaction.amount}-${transaction.date}`}/>
              <ListItemSecondaryAction>
                <IconButton edge ="end" aria-label = "delete" onClick= {() => deleteTrans(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>

    )
  }

  export default List
