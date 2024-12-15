const Header = (course) => {
  console.log(course)
      return(
        <h1>
            Course title: {course.name}
        </h1>
      )
}

const Part = ({parts}) => {
  console.log(parts)
  return(
    <div>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </div>
  )
}

const Content = ({course}) => {
    return(
      <div>
       <Part parts={course.parts[0]}/>
       <Part parts={course.parts[1]}/>
       <Part parts={course.parts[2]}/>
      </div>
    )
}

const Total = ({course}) => {
  console.log(course.parts)
  const num1 = course.parts[0].exercises
  const num2 = course.parts[1].exercises
  const num3 = course.parts[2].exercises

    return(
      <div>
        <p>
          Number of exercises: {num1 + num2 + num3}
        </p>
      </div>
    )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )

}

export default App