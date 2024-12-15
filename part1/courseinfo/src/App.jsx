const Header = (title) => {
  console.log(title)
      return(
        <h1>
            Course title: {title.course}
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

const Content = ({parts}) => {
    return(
      <div>
       <Part parts={parts[0]}/>
       <Part parts={parts[1]}/>
       <Part parts={parts[2]}/>
      </div>
    )
}

const Total = ({parts}) => {
  console.log(parts)
  const num1 = parts[0].exercises
  const num2 = parts[1].exercises
  const num3 = parts[2].exercises
    return(
      <div>
        <p>
          Number of exercises: {num1 + num2 + num3}
        </p>
      </div>
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )

}

export default App