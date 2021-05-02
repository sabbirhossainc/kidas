import React from "react";
import NavCom from "./NavCom";
import MoveStuffAround from "../Body/Ticker";
import { CssBaseline } from "@material-ui/core";
import Banner from "../Body/Banner";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <Banner />
      <NavCom />
      {/* <MoveStuffAround /> */}
    </>
  );
};

export default Header;
