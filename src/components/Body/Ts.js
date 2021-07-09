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
            <CardTitle tag="h3">
            Therapeutic service of Keraniganj Intellectually Disabled And Autistic
              School
            </CardTitle>
            <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, qui ipsam. Dolores suscipit amet facere,
        ipsum nihil hic maiores cupiditate vitae, dolorum quos ab ea est placeat quo voluptas sint incidunt obcaecati rem, dolorem soluta facilis itaque harum sequi! 
        Libero officiis harum eaque! Debitis, architecto cumque. Est distinctio doloribus libero?
        </Typography>
            <CardText />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ut placerat metus, consequat dictum elit. Vivamus id mi vitae
                leo lobortis accumsan in a metus. Nam scelerisque, sapien quis
                ultrices malesuada, tortor quam pellentesque elit, at viverra
                nisi magna eget mauris. Suspendisse mollis metus eget convallis
                aliquet. Nulla varius ipsum in metus pellentesque laoreet.
                Curabitur ultricies tincidunt fermentum. Ut a odio consectetur,
                convallis ante quis, auctor massa. Aliquam erat volutpat.
                Praesent non lobortis libero. In lorem lorem, accumsan quis
                blandit non, dapibus non sem. Sed sit amet nunc eget augue
                interdum interdum. Proin non sem in ex efficitur dictum.
              </Typography>
            <CardText />
          </CardBody>
        </Card>
    </Container>
  );
};

export default Ts;
