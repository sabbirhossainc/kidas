import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import { Container } from "reactstrap";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow:"auto",
    backgroundColor: "#0F2B5B",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(250),
      height: theme.spacing(14),
    },
  },
  bg: {
    fontFamily: "Monospace",
    paddingTop: 20,
    paddingBottom: 20,
    color: theme.palette.grey[300],
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <>
        <CssBaseline />
        <Box className={classes.bg}>
          <Typography variant="h4" align="center">
            Keraniganj Intellectually Disabled And Autistic School
            <Typography variant="h5" gutterBottom>
              Optimize. Innovate. Achieve.
            </Typography>
          </Typography>
        </Box>
        {/* <Paper elevation={3} className={classes.bg}/> */}
      </>
    </div>
  );
}