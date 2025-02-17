import { useState } from 'react'

//Statistics main component
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

//Display statistics
//If value name is positive then display it with a %
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

  //do not compute if total is 0, just return 0
  //fixed value for after decimal point
  const pospercentage = total === 0 ? 0 : ((good/total) * 100).toFixed(10)
  const score = good - bad
  //do not compute if total is 0, just return 0
  //fixed value for after decimal point
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