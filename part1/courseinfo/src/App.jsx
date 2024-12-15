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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises}/>
    </div>
  )

}

export default App