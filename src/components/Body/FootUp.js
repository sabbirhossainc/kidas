import { CssBaseline } from "@material-ui/core";
import MapContainer from "../Body/Map";
import {
    Grid,
    Card,
    Typography,
    CardContent,
    Box,
    Paper,
} from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";

import React from "react";

const FootUp = () => {
    return ( <
        Container fluid style = {
            { backgroundColor: "#0F2B5B", height: "auto", color: "black" } } >
        <
        Row >
        <
        Col sm md lg = { 4 }
        style = {
            {} } >
        <
        Card style = {
            {
                marginLeft: "8rem",
                marginBottom: 40,
                marginTop: 40,
                textAlign: "center",
            }
        } >
        <
        CardContent >
        <
        Typography gutterBottom variant = "h4"
        component = "h2" >
        Contact Us <
        /Typography> <
        Typography variant = "h6" > Keraniganj, Dhaka < /Typography> <
        Typography variant = "h6" > kidas2015bd @gmail.com < /Typography> <
        Typography variant = "h6" > +8801712560276 < /Typography> <
        /CardContent> <
        /Card> <
        /Col> <
        Col sm md lg = { 6 }
        style = {
            {
                marginTop: 5,
                marginBottom: 5,
                marginLeft: "15rem",
                overflow: "hidden",
            }
        } >
        <
        MapContainer / >
        <
        /Col> <
        /Row> <
        /Container>
    );
};

export default FootUp;