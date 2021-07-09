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

const About = () => {
    const classes = useStyles();
    return (
        <Container fixed className={classes.root}>
      <Card>
          <CardBody>
            <CardTitle tag="h3" className="text-center">
            About
            </CardTitle>
            <br/>
            <Typography variant="body1" color="initial"> Some gut speech about Keraniganj Intellectually Disabled And Autistic School.
        </Typography>
            <CardText />
              <Typography>
The Autism Health Care Center was established in 2015 to conduct health and education services for special children with autism and intellectual disabilities. 
Keraniganj Intellectually Disabled And Autistic School has been established to conduct educational services for the disabled. 
The only institution to serve the disabled in rural areas. During the Corona period, the institute has been conducting service activities for the disabled.
              </Typography>
            <CardText />
          </CardBody>
        </Card>
    </Container>
    )
}

export default About
