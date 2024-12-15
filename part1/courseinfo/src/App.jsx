const Header = (title) => {
  console.log(title)
      return(
        <h1>
            Course title: {title.course}
        </h1>
      )
}

const Part = ({part}) => {
  console.log(part)
  return(
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Content = ({part1, part2, part3}) => {
    return(
      <div>
       <Part part={part1}/>
       <Part part={part2}/>
       <Part part={part3}/>
      </div>
    )
}

const Total = ({num1, num2, num3}) => {
  console.log(num1, num2, num3)
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
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total num1={parts[0].exercises} num2={parts[1].exercises} num3={parts[2].exercises}/>
    </div>
  )

}

export default App