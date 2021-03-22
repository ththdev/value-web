import React from "react";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
import ProfileImage from "./ProfileImage";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 30,
    marginBottom: 30,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#c4c4c4",
  },
  left: {
    display: "flex",
    flexDirection: "column",
  },
  subTitle: {
    fontSize: 16,
    color: "#A3A3A3",
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

const BaseHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.subTitle}>
          {moment().format("dddd, MMM Do")}
        </div>
        <div className={classes.title}>Today</div>
      </div>
      <ProfileImage />
    </div>
  );
};

export default BaseHeader;
