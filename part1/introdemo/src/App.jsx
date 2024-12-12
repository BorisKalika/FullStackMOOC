const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old. I like {props.hobby}.
      </p>
    </div>
  )
}

const Footer = () => {

  return(
    <div>
      <p>Mawewe I luvs you </p>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10
  const hobby = 'sports'

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} hobby={'tennis'}/>
      <Hello name={name} age={age} hobby={hobby}/>
      <Footer />
    </div>
  )
}


export default App