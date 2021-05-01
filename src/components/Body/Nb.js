import React from "react";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import notice from "../images/notice.jpg";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        backgroundColor: theme.palette.grey[300],
    },
}));

const Nb = () => {
    const classes = useStyles();

    return ( <
        >
        <
        CssBaseline / >
        <
        Container fixed className = { classes.root } >
        <
        Card >
        <
        CardBody >
        <
        CardTitle tag = "h3" >
        The Value of Keraniganj Intellectually Disabled And Autistic School { " " } <
        /CardTitle>{" "} <
        CardSubtitle tag = "h5"
        className = "mb-2 text-muted" >
        Let’ s Succeed Together { " " } <
        /CardSubtitle>{" "} <
        Typography >
        Welcome!I provide all the tools, guidance, and support my clients need to succeed in their respective markets.Take a look around and explore the various services I offer, the clients that I’ ve partnered with, and samples of my work. { " " } <
        /Typography>{" "} <
        CardText / > { " " } {
            /* <Typography>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
                                                  placerat metus, consequat dictum elit. Vivamus id mi vitae leo
                                                  lobortis accumsan in a metus. Nam scelerisque, sapien quis
                                                  ultrices malesuada, tortor quam pellentesque elit, at viverra nisi
                                                  magna eget mauris. Suspendisse mollis metus eget convallis
                                                  aliquet. Nulla varius ipsum in metus pellentesque laoreet.
                                                  Curabitur ultricies tincidunt fermentum. Ut a odio consectetur,
                                                  convallis ante quis, auctor massa. Aliquam erat volutpat. Praesent
                                                  non lobortis libero. In lorem lorem, accumsan quis blandit non,
                                                  dapibus non sem. Sed sit amet nunc eget augue interdum interdum.
                                                  Proin non sem in ex efficitur dictum.
                                                </Typography> */
        } { " " } <
        CardText / >
        <
        CardImg bottom width = "80%"
        src = { notice }
        alt = "Card image cap" / >
        <
        /CardBody>{" "} <
        /Card>{" "} <
        /Container>{" "} <
        />
    );
};

export default Nb;