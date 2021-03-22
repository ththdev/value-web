import React from "react";
import { makeStyles } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    display: "flex",
    color: "#a3a3a3",
    justifyContent: "space-between",
    fontSize: 14,
    height: 70,
    alignItems: "center",
    borderBottom: "1px solid #f2f2f2",
  },
  left: {
    display: "flex",
    flexDirection: "column",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

const Transaction = ({ data }) => {
  const { title, amount, date, type } = data;
  const classes = useStyles();

  const formatedDate = moment.utc(date).format("YYYY.MM.DD");

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.title}>{title}</div>
        <div>{formatedDate}</div>
      </div>
      <div className={classes.right}>
        <div className={classes.title}>{amount}</div>
        <div>balance</div>
      </div>
    </div>
  );
};

export default Transaction;
