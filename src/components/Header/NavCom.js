import React from "react";
import { emphasize, makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AccessibleForwardRoundedIcon from "@material-ui/icons/AccessibleForwardRounded";

import Home from "../Body/Home";
import Nb from "../Body/Nb";
import Ts from "../Body/Ts";
import Ep from "../Body/Ep";
import AlertDialogSlide from "../Body/Modal";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 3,
    padding: 5,
    height: theme.spacing(1),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}));

const NavCom = () => {
  const classes = useStyle();
  return (
    <div>
      <Router>
        <Navbar
          style={{ backgroundColor: "#51B5E0", marginTop: 0 }}
          light
          expand="md"
        >
          <NavbarBrand href="/home">
            <AccessibleForwardRoundedIcon fontSize="large" />
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className={classes.root} to="/home/">
                  <HomeIcon style={{ fontSize: 20, paddingBottom: 3 }} />
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem></NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className={classes.root}
                  to="/edu-program"
                  style={{ color: "black" }}
                >
                  Education Program
                </Link>
              </NavLink>
            </NavItem>
            <NavLink>
              <Link
                className={classes.root}
                to="/notice-board"
                style={{ color: "black" }}
              >
                Notice Board
              </Link>
            </NavLink>
            <UncontrolledDropdown nav inNavbar>
              &nbsp;&nbsp;
              <DropdownToggle
                caret
                style={{ backgroundColor: "#fff" , color: "black" }}
              >
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/services/therapeutic-service">
                    Therapeutic Service
                  </Link>
                </DropdownItem>
                <DropdownItem>Option</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{ color: "black" }}>
            <b>kidas2015bd@gmail.com</b>
          </NavbarText>
          <NavbarText>&nbsp; &nbsp; </NavbarText>
          <NavbarText style={{ color: "black" }}>
            <b>+8801712560276</b>
          </NavbarText>
          <NavbarText>&nbsp; &nbsp; </NavbarText>
          <AlertDialogSlide />
        </Navbar>
        <Switch>
          <Route path="/services/therapeutic-service">
            <Ts />
          </Route>
          <Route path="/edu-program">
            <Ep />
          </Route>
          <Route path="/notice-board">
            <Nb />
          </Route>
          <Route path="/home/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavCom;
