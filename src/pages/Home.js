import React from "react";
import { makeStyles } from "@material-ui/core";
import BaseHeader from "components/base/BaseHeader";
import TransactionList from "components/transacitons/TransactionList";
import HeaderToolbar from "components/base/HeaderToolbar";

const useStyles = makeStyles({
  root: {},
  content: {
    padding: "0 30px",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderToolbar />
      <BaseHeader />
      <div className={classes.content}>
        <TransactionList />
      </div>
    </div>
  );
}

export default Home;
