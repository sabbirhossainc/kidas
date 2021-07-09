import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
    backgroundColor: theme.palette.grey[300],
  },
}));

const Ts = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <Card>
          <CardBody>
            <CardTitle tag="h3" className="text-center">
            Physiotherapy
            </CardTitle>
            <br/>
            <Typography variant="body1" color="initial">Physiotherapy is one of the allied health professions that uses mechanical force and movements. Physiotherapy helps improve physical movement, the gross and fine motor activities, paralysis, sensory neural mobility disorders of cerebral palsy and other children with special need.
Kidas provides physiotherapy to improve the physical problems both visible 4nd Invisible of a particular child and to help lead normal life through regular exercise. Kidas prepares sportsman for Special Olympics through regular sports physiotherapy and maintains their fitness. Kidas is alto establishing Prosthetic and Orthotic. (P&O) Centre to rehabilitate children who need P&O support.
Activities of Physiotherapy are as follows:
        </Typography>
            <CardText />
              <Typography>
•	Posture management<br/>
•	Developing muscle strength<br/>
•	Eye-hand coordination<br/>
•	Motor planning<br/>
•	Developing assistive devices<br/>
•	Improving gait pattern<br/>
•	Developing strength and endurance<br/>

              </Typography>
            <CardText />
          </CardBody>
        </Card>
    </Container>
  );
};

export default Ts;
