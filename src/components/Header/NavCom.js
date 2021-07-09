import React, { useState } from "react";
import { emphasize, makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
import About from "../Body/About";
import Nb from "../Body/Nb";
import Ts from "../Body/Ts";
import Ep from "../Body/Ep";
import AlertDialogSlide from "../Body/Modal";
// import MoveStuffAround from "../Body/Ticker";
// import { Paper } from "@material-ui/core";

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
  tik:{
    flexWrap:"warp",
    paddingTop:1,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.grey[100],
    fontSize: 20,
    height: theme.spacing(4),
    // height: theme.breakpoints.values.sm[400],
    overflow:"hidden",
  },
}));

const NavCom = () => {
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <CssBaseline/>
      <Router>
        <Navbar
          style={{ backgroundColor: "#51B5E0", marginTop: 0 }}
          light
          expand="md"
          >
          <NavbarBrand href="/">
            <AccessibleForwardRoundedIcon fontSize="large" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className={classes.root} to="/">
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
              {/* &nbsp; */}
              <DropdownToggle
                caret
                style={{ backgroundColor: "#fff" , color: "black" }}
                >
                Services
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem>
                  <Link to="/services/therapeutic-service">
                    Therapeutic Service
                  </Link>
                </DropdownItem> */}
                <DropdownItem>
                  <Link to="/services/PSYCHOLOGY-SERVICE-AND-MANAGEMENT">
                  PSYCHOLOGY SERVICE AND MANAGEMENT
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/services/DIET-MANAGEMENT">
                  DIET MANAGEMENT
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/services/COUNSELLING">
                  COUNSELLING
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/services/SPEECH-AND-LANGUAGE-THERAPY">
                  SPEECH AND LANGUAGE THERAPY
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/services/OCCUPATIONAL-AND-SENSORY-THERAPY">
                  OCCUPATIONAL AND SENSORY THERAPY
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/services/PHYSIOTHERAPY">
                  PHYSIOTHERAPY
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/services/MUSIC-THERAPY">
                  MUSIC THERAPY
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink>
              <Link
                className={classes.root}
                to="/about"
                style={{ color: "black" }}
                >
                About
              </Link>
            </NavLink>
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
          </Collapse>
        </Navbar>
        {/* <MoveStuffAround/> */}
        <Switch>
          <Route path="/services/PHYSIOTHERAPY">
            <Ts />
          </Route>
          <Route path="/edu-program">
            <Ep />
          </Route>
          <Route path="/notice-board">
            <Nb />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavCom;
