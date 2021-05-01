import CssBaseline from "@material-ui/core/CssBaseline";
import MapContainer from "../Body/Map";
import {
  Card,
  Typography,
  CardContent,
  Box,
} from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";

import React from "react";

const FootUp = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#0F2B5B", height: "auto", color: "black" }}
    >
      <Row>
        <Col sm={12} md lg={4} style={{marginLeft:"6rem"}}>
          <Card component={Box}
            style={{
              overflow:"hidden",
              marginLeft:10,
              marginRight:10,
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
        </Col>
        <Col
          sm={12}
          md
          lg={6}
          style={{
            marginTop: 5,
            marginBottom: 5,
            marginLeft: "11rem",
            overflow: "hidden",
          }}
        >
          <MapContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default FootUp;