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

  return (
    <>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <Card>
          <CardBody>
            <CardTitle tag="h3">
              The Value of Keraniganj Intellectually Disabled And Autistic
              School
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2 text-muted">
              Let’ s Succeed Together
            </CardSubtitle>
            <Typography>
              Welcome! we provide all the  guidance and support our students
              need to succeed in their education.Take a look around and
              explore the various services we offer.
            </Typography>
            <CardText />
              <Typography>
              Candidates need to participate in a viva voice for final selection in the program. Once they are selected, they need to pay the first installment of the course fee.
              </Typography>
              <CardText/>
              <Typography>
*** The students will get opportunity to complete the courses with flexible valid registration period for upto 3 years after admission.
              </Typography>
            <CardText />
            <CardImg bottom width="80%" src={notice} alt="Card image cap" />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Nb;
