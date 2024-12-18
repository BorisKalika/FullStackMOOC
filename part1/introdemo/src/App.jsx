import { useState } from 'react'

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
}

export default App