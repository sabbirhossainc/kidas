import React from 'react'
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

const Ep = () => {
  const classes = useStyles();
    return (
      <Container fixed className={classes.root}>
        <Card>
          <CardBody>
            <CardTitle tag="h3" className="text-center">
              Specialized Education Services
            </CardTitle>
            <br />
            <Typography variant="body1" color="initial">
            Specialized Education Services are structured with two programs: Early Childhood Development Programme (ECDP), Adult Leisure and Learning Programme (ALLP) and five (05) separate special schools are functioning under specialized education services. The special school with its diverse services and activities is the nucleus of the institute. Five types of special schools are established to provide educational opportunities and facilities for the special needs. In the context of the school’s education system as a whole, each special need child is offered the most appropriate class for the specific types, age and ability. The age ranges of the students in the schools are between 6 years to 15 years. 
            </Typography>
            <CardText />
            <Typography>
              The main objectives of the Special Schools: The aim of all the schools is to provide opportunities to explore the potential of students and to support them in their education. Kidas focuses on the strengths of students encourages them to learn, play and interact with their peers irrespective of their disability. To provide training in Activities of Daily Living (ADL) with the support of the care givers and family members. To provide educational exposure to the children who are educable by following the National Curriculum Text Book Board (NCTB). To provide vocational training for trainable children whom cannot cope with the complexity of education Each special school comprises of nine classes and each class has different curriculum. The curriculum of pre-primary and primary class up to class IV and middle school follows the curriculum of class V. The curriculum of all special schools is prepared following NCTB curriculum and the therapeutic activities are also offered for children on their needs.
              </Typography>
              <CardText/>
              <Typography>
              The Subject matters at different levels are: Academic education programme (Language education, Social studies, Mathematics, Religious education, Moral education, Science and general education) At the age of 6 years student is placed in junior level-I, depending on the child’s progress within the first semester, the successful student is promoted to junior According to the performance few students can complete all three levels (junior or middle) within a year. All the schools and classes follow the same procedure procession through classes Academic Readiness – Based on the improvement or condition of the child, in between Junior and Middle class or in between Middle and Senior Class, the child will be promoted to Academic Readiness Class. In Academic Readiness Class for the duration of 01 years (maximum aging between either at 9 to 10 or between 12 to 13 years) the child will be prepared for the academic class for sending to mainstream pre-primary or primary school. Senior Class/ Pre-vocational – Those children cannot be mainstreamed for general education will be promoted to Senior Class (for the duration of 01 weeks) which is otherwise pre-vocational for onward promoting to the Vocational School at the age of 14 years. 
            </Typography>
            <CardText />
            <Typography>
            Each special school has their own clear criteria and curriculum to provide individual educational programmes (IEP) for students. The primary goal is to enable the students to adapt to the environment and increase their learning ability. Measurable, attainable goals are set collaboratively for each student with input from the family and the multidisciplinary team. All teachers and therapists work as a team to develop functional, meaningful and sustainable learning opportunities. This assists in motivating the students to developing greater levels of independence. The students of Junior (age range is 6 to 10 years), Middle (age range is 10-15 years) and Senior are receiving training in all the daily living activities (toileting, dressing, and feeding, grooming and self-help skills), communication and socialization, reading, writing, counting and functional academics for daily life skills. According to their academic achievement, they are transferred to regular Mainstreamed Education Institute where they can read nursery to 5th grade in Bengali. Flexible national curriculum of the textbook board (NCTB) is being followed to teach some of the students.
            </Typography>
            <CardText />
            {/* <Typography>
            </Typography> */}
            <CardText />
          </CardBody>
        </Card>
      </Container>
    );
}

export default Ep
