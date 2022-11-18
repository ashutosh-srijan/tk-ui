import React from "react";
import { AiFillHome } from "react-icons/ai";
import PeopleIcon from "@material-ui/icons/People";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { BiMessageMinus } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import "./BaseTab.css";

function BaseTab() {
  return (
    <div className="base__design">
      <div className="base__tab">
        <AiFillHome size="2em" name="Home" />
        <PeopleIcon fontSize="large" />
        <AddBoxIcon fontSize="large" />
        <BiMessageMinus size="2em" />
        <AiOutlineUser size="2em" />
      </div>
    </div>
  );
}

export default BaseTab;
