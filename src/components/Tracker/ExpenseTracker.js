//NPM packages: npm i react@16.12.0 react-dom@16.12.0 @material-ui/core @material-ui/icons @material-ui/lab @speechly/react-client @speechly/react-ui chart.js react-chartjs-2 uuid

import React from "react";

import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import {Bar} from "react-chartjs-2";
import useStyles from "./styles";
import useTransactions from "../../chartData";

// Component for Left and Right side of the page
const ExpenseTracker = ({ title }) => {
  const classes = useStyles();
  const { sum, chartsData } = useTransactions(title);

  return (
    //fetches output according to the class cagegory(Income/Expenses)
    <Card className={title === "Income" ? classes.income : classes.expenses}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">{sum}</Typography>
        <Bar data={chartsData} />
      </CardContent>
    </Card>
  );
};
export default ExpenseTracker;
