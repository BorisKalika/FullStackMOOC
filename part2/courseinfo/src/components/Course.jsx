import Header from './Header'
import Content from './Content'
import Part from './Part'


const Course = ({course}) => {
   console.log("course: ", course)

   const array = course.parts

   const initialValue = 0;
   const totalExercises = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        initialValue,
   );
   console.log("totalExercises: ", totalExercises)

   return(
   <div>
      <Header coursename={course.name} />
      <Content course={course} />
      <h3>total of {totalExercises} exercises</h3>
   </div>
   )
}

export default Course