import React from "react";
import { makeStyles } from "@material-ui/core";
import { Popover, Menu, Position } from "evergreen-ui";
import apiClient from "lib/apiClient";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 36,
    height: 36,
    borderRadius: "50%",
    background: "#c4c4c4",
    padding: 0,
  },
});

const ProfileImage = () => {
  const classes = useStyles();

  const history = useHistory();

  const logout = () => {
    apiClient
      .post("/accounts/logout/", {
        header: {
          Authorization: `JWT ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        window.localStorage.removeItem("token");
        history.go(0);
      });
  };

  return (
    <Popover
      position={Position.BOTTOM_RIGHT}
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item onSelect={() => console.log("Share")}>Share</Menu.Item>
            <Menu.Item onSelect={() => console.log("Move")}>Move</Menu.Item>
            <Menu.Item onSelect={() => console.log("Profile")}>
              Profile
            </Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Menu.Item onSelect={logout} intent="danger">
              Log out
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <div className={classes.root} />
    </Popover>
  );
};

export default ProfileImage;
