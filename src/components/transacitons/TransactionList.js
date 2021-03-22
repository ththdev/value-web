import React from "react";
import { makeStyles } from "@material-ui/core";
import apiClient from "lib/apiClient";
import Transaction from "./Transaction";

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    color: "#a3a3a3",
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
  title: {},
});

const TransactionList = () => {
  const [data, setData] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    apiClient
      .get("/transactions/", {
        headers: {
          Authorization: `JWT ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className={classes.root}>
      {data.map((item, index) => {
        return <Transaction key={index} data={item} />;
      })}
    </div>
  );
};

export default TransactionList;
