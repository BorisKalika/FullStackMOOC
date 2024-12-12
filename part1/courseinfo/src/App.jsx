const Header = (title) => {
  console.log(title)
      return(
        <h1>
            Course title: {title.course}
        </h1>
      )
}

const Content = (description) => {
  console.log(description)
    return(
      <div>
        <p>
          Part 1: {description.part1} has {description.exercises1} exercises
        </p>
        <p>
          Part 2: {description.part2} has {description.exercises2} exercises
        </p>
        <p>
          Part 3: {description.part3} has {description.exercises3} exercises
        </p>
      </div>
    )
}

const Total = (num) => {
  console.log(num)
    return(
      <div>
        <p>
          Number of exercises: {num.exercises1 + num.exercises2 + num.exercises3}
        </p>
      </div>
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )

}

export default App