import {Container,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orange, blue,blueGrey } from "@material-ui/core/colors";
import Example from "./SlideCom";
import CustomizedAccordions from "./Accordion";
import MediaCard from "./Services";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 30,
    padding: 10,
    backgroundColor: theme.palette.grey[300],
  },
  div: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#F8F9FA",
  },
  act: {
    // marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#0F2B5B",
  },
  serv:{
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#F8F9FA",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>
        <Container fixed className={classes.root}>
          <Example />
        </Container>
        {/* <img width="500px" src="https://via.placeholder.com/600/d32776"/> */}
      </div>
      <div className={classes.act}>
          <Typography variant="h3" style={{ textAlign: "center",  paddingBottom:10, color:"InfoBackground" }} gutterBottom>
              Options
          </Typography>
        <Container>
          <CustomizedAccordions />
        </Container>
      </div>
      <div className={classes.serv}>
      <Typography variant="h3" style={{ textAlign: "center", paddingBottom:10, }} gutterBottom>
              Our Services
          </Typography>
          <MediaCard/>
      </div>
    </>
  );
};

export default Home;
