import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MapContainer from "../Body/Map";
import Contact from "../Body/Contact";
import { Container, Row, Col } from "react-bootstrap";


const FootUp = () => {
  return (
    <Container fluid style={{ backgroundColor: "#0F2B5B", color: "black" }}>
      <CssBaseline />
      <Row>
        <Col sm={12} md lg={4}>
          <Contact />
        </Col>
        <Col
          sm={12}
          md
          lg={6}
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: "17rem",
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
