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
            <br/>
            <Typography variant="body1" color="initial">Specialized Education Services are structured with two programs: Early Childhood Development Programme (ECDP),
             Adult Leisure and Learning Programme (ALLP) and five (05) separate special schools are functioning under specialized education services.
              The special school with its diverse services and activities is the nucleus of the institute. 
            Five types of special schools are established to provide educational opportunities and facilities for the special needs.
            In the context of the school’s education system as a whole, each special need child is offered the most appropriate class for the specific types, age and ability.
             The age ranges of the students in the schools are between 6 years to 17 years.
        </Typography>
            <CardText />
              <Typography>
The main objectives of the Special Schools: The aim of all the schools is to provide opportunities to explore the potential of students and to support them in their education. PROYASH focuses on the strengths of students encourages them to learn, play and interact with their peers irrespective of their disability.
To provide training in Activities of Daily Living (ADL) with the support of the care givers and family members.
To bring about sustainable improvement in five major parameters of development – Motor, Socialization, Cognitive, Language and communication and Self-help Skill.
To provide educational exposure to the children who are educable by following the National Curriculum Text Book Board (NCTB).
To provide vocational training for trainable children whom cannot cope with the complexity of education
Each special school comprises of nine classes and each class has different curriculum. The nine classes are grouped in three levels: Junior, Middle and Senior level. Junior level follows the curriculum of pre-primary and primary class up to class IV and middle school follows the curriculum of class V to class VII. And the senior level or Prevocational class is equivalent to class VIII. The curriculum of all special schools is prepared following NCTB curriculum and the therapeutic activities are also offered for children on their needs. The Subject matters at different levels are:
Academic education programme (Language education, Social studies, Mathematics, Religious education, Moral education, Science and general education)
At the age of 6 years student is placed in junior level-I, depending on the child’s progress within the first semester, the successful student is promoted to junior level II. In the same way, the student may move to the next level- III. According to the performance few students can complete all three levels (junior or middle) within a year. Moreover, students who are not able to complete one level within one semester are allowed to attend 2nd or 3rd semesters to complete a level.
All the schools and classes follow the same procedure procession through classes
Academic Readiness – Based on the improvement or condition of the child, in between Junior and Middle class or in between Middle and Senior Class, the child will be promoted to Academic Readiness Class. In Academic Readiness Class for the duration of 01 years (maximum aging between either at 9 to 10 or between 12 to 13 years) the child will be prepared for the academic class for sending to mainstream pre-primary or primary school.
Senior Class/ Pre-vocational – Those children cannot be mainstreamed for general education will be promoted to Senior Class (for the duration of 01 weeks) which is otherwise pre-vocational for onward promoting to the Vocational School at the age of 14 years.
</Typography>
<CardText/>
<Typography>
Each special school has their own clear criteria and curriculum to provide individual educational programmes (IEP) for students. The primary goal is to enable the students to adapt to the environment and increase their learning ability. Measurable, attainable goals are set collaboratively for each student with input from the family and the multidisciplinary team. All teachers and therapists work as a team to develop functional, meaningful and sustainable learning opportunities. This assists in motivating the students to developing greater levels of independence.
The students of Junior (age range is 6 to 10 years), Middle (age range is 10-15 years) and Senior sections (age range is 15 to 17 years) are receiving training in all the daily living activities (toileting, dressing, and feeding, grooming and self-help skills), communication and socialization, reading, writing, counting and functional academics for daily life skills.
According to their academic achievement, they are transferred to regular Mainstreamed Education Institute where they can read nursery to 10th grade in Bengali or in English medium. Flexible national curriculum of the textbook board (NCTB) is being followed to teach some of the students.
</Typography>
<CardText/>
<Typography>
Teaching strategies and Therapies:
The training process maintains an individual goal plan for each student. By observing the student’s current level of functioning, the teacher first set the goal plan and then set up the expected development for a period of a term (4 months). The teacher also prepares a lesson plan for working with the students in classroom. Lesson plan uses the analysis process to teach the students. Behaviour modification techniques are used with all children.
The use of social stories, repetition and rhyming songs are frequently used with children with social-emotional development issues. For cognitive flexibility teaching staff use both words, objects and picture to increase object recognition. Children are able to receive one on one support if required for behavioral difficulties.
According to the need of the child, different therapies like helps to improve the sensation to touch, smell, audiology and tactile), water play, trampoline, exchange ball, puzzles, shape (matching, sorting color and objects), craft work are used as functional therapy. To improve communication and socialization skills turn taking, choice making, greeting to others, interacting with peers, or pretend play and role play are taught in the classroom. Visual cues, picture exchange communication, sometimes AAC are followed in the class to understand and express toileting and daily schedule. Parents are encouraged to follow this system at their home. For all students with visual Impairment tactile method is used in sensory training and cognitive development. Orientation and mobility training, Braille reading and writing are also provided to send them to mainstream school. Physiotherapy and exercise for motor planning, wheelchair and mobility training, feeding training are provided as intensive care and therapy for the cerebral palsy. Mostly teaching is 1:1 each. Total communication is the best mode of communication for teaching children with hearing impairment. To develop their language and communication skill listening is practiced in the classroom. And visual teaching materials are consistently used.
Evaluation:
At the end of each term, the student’s improvement is evaluated by using overall data report from teachers and therapists, term exam report and information through the progress of IEP.

              </Typography>
            <CardText />
          </CardBody>
        </Card>
    </Container>
    )
}

export default Ep
