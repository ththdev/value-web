import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#fff",
    minHeight: "100vh",
    padding: 0,
    maxWidth: 375,
  },
});

const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return <Container className={classes.root}>{children}</Container>;
};

export default BaseLayout;
