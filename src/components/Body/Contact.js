import React from "react";
import {
    Card,
    Typography,
    CardContent,
    Box,
  } from "@material-ui/core";

const Contact = () => {
  return (
      <Card
        component={Box}
        style={{
          overflow: "hidden",
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 40,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Contact Us
          </Typography>
          <Typography variant="h6">Keraniganj, Dhaka</Typography>
          <Typography variant="h6">kidas2015bd@gmail.com</Typography>
          <Typography variant="h6">+8801712560276</Typography>
        </CardContent>
      </Card>
  );
};

export default Contact;
