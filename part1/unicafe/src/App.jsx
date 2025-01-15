import { useState } from 'react'

const Statistics = ({good, neutral, bad, total, average, pospercentage}) => { 
  return(
    <div>
    <StatisticLine name="good" value={good} />
    <StatisticLine name="neutral" value={neutral} />
    <StatisticLine name="bad" value={bad} />
    <StatisticLine name="all" value={total} />
    <StatisticLine name="average" value={average} />
    <StatisticLine name="positive" value={pospercentage} />
    </div>
  )
}

const StatisticLine = ({name, value}) => {
  return (
    <table style={{ width: "300px", tableLayout:'fixed'}}>
        <tbody>
            <tr>
              <td>{name}</td>
              <td>{name === "positive" ? `${value} %` : value}</td>
            </tr>
        </tbody>
    </table>
  )
}

const Button =({onHulkSmash, name}) =>{ 
return(
  <button onClick={onHulkSmash}> {name}</button>
)
}

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countGood = () =>{
    setGood(good + 1)
    console.log('good counter increased! Value before:', good)
  }

  const countNeutral = () => {
    setNeutral(neutral + 1)
    console.log('neutral counter increased! Value before:', neutral)
  }

  const countBad = () =>{
    setBad(bad + 1)
    console.log('bad counter increased! Value before:', bad)
  }
  
  const total = good + neutral + bad
  const pospercentage = total === 0 ? 0 : ((good/total) * 100).toFixed(10)
  const score = good - bad
  const average = total === 0 ? 0 : (score/total).toFixed(10)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onHulkSmash={countGood} name='good' />
      <Button onHulkSmash={countNeutral} name='neutral' />
      <Button onHulkSmash={countBad} name='bad' />
      <h1>statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
        ) : (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} pospercentage={pospercentage}/>
        )}
    </div>
  )
}

export default App


/*
const App = () => {
 
  const Display = ({ counter }) => <div>{counter}</div>

  const Button = ({onHulkSmash, name}) => <button onClick={onHulkSmash}> {name} </button>

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () =>{ 
    setCounter(counter + 1)
    console.log('increased! Value before:', counter)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('decreased! Value before:', counter)
  }

  const setToZero = () => {
    setCounter(0)
    console.log('resetted! Value before:', counter)
  }

  const randomNum = () => {
    setCounter(Math.random())
    console.log('RNG HUZAHAHHH! Value before:', counter)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onHulkSmash={increaseByOne} name='plus' />
      <Button onHulkSmash={decreaseByOne} name='minus' />
      <Button onHulkSmash={setToZero} name='zero' />
      <Button onHulkSmash={randomNum} name='random' />
      
    </div>
  )
} */