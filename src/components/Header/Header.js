import React from "react";
import NavCom from "./NavCom";
import { CssBaseline } from "@material-ui/core";
import Banner from "../Body/Banner";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <Banner />
      <NavCom />
    </>
  );
};

export default Header;
