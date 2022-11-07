import React from "react";
import { AiFillHome } from "react-icons/ai";
//import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import AddBoxIcon from "@material-ui/icons/AddBox";
import InboxIcon from "@material-ui/icons/Inbox";
import PersonIcon from "@material-ui/icons/Person";
import "./BaseTab.css";

function BaseTab() {
  return (
    <div className="base__design">
      <div className="base__tab">
        <AiFillHome size="2em" title="home" />
        <PeopleIcon fontSize="large" />
        <AddBoxIcon fontSize="large" />
        <InboxIcon fontSize="large" />
        <PersonIcon fontSize="large" />
      </div>
    </div>
  );
}

export default BaseTab;
