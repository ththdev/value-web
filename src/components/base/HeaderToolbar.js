import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import { Add, Notifications } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 60,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20,
  },
});

const HeaderToolbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        component="span"
        size="small"
        disableRipple={true}
        style={{ marginRight: 10 }}
      >
        <Add style={{ color: "#a3a3a3", fontSize: 24 }} />
      </IconButton>
      <IconButton component="span" size="small" disableRipple={true}>
        <Notifications style={{ color: "#a3a3a3", fontSize: 24 }} />
      </IconButton>
    </div>
  );
};

export default HeaderToolbar;
