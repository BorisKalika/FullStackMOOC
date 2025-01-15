import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

export default App

/*
const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)    
    setTotal(left + updatedRight  )
  }


  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <p>total {total} </p>
      <History allClicks={allClicks} />
    </div>
  )
}


export default App
*/
/*d2)
const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)    
    setTotal(left + updatedRight  )
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>total {total} </p>
      <History allClicks={allClicks} />
    </div>
  )
}


export default App
*/

/*
d)
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftclick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left +1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftclick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App



1.c
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
*/