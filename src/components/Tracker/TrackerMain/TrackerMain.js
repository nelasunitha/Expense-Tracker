import React, {useContext} from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./style";
import Form from "./Form";
import List from "../../Expense-List/ExpenseList";
import { TrackerContext } from "../../../store/context";

export const TrackerMain = () => {
  const classes = useStyles();
  const { balance } = useContext(TrackerContext)
  return (
    <Card className={classes.root}>
      <CardHeader title="Expenses Tracker"/>
      <CardContent>
        <Typography align="center" variant="h5">
          Remaining Balance:$
          {balance}
        </Typography>
        <Typography
          align="center"
          variant="subtitle"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        ></Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
