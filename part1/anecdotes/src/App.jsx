import { useState } from 'react'


const Button =({onHulkSmash, name}) =>{ 
  return(
    <button onClick={onHulkSmash}> {name}</button>
  )
  }

const Leaderboard = ({votearray, anecdotes}) => {
  
  //returns highest number in the votearray (quote with most votes)
  const highestVotedQuote = Math.max(...votearray)
  //returns the index of the highest number
  const indexTopQuote = votearray.indexOf(highestVotedQuote)
  //returns the quote in question
  const topQuote = anecdotes[indexTopQuote]

  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{topQuote}</p>
      <p>has {highestVotedQuote} votes</p>
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votearray, setVoteArray] = useState([0, 0, 0, 0, 0, 0, 0, 0]) //fill array with zeroes

  const getRandomNum = Math.floor(Math.random() * anecdotes.length)

  const flipPage = () =>{

    const getRandomNum = Math.floor(Math.random() * anecdotes.length)

    setSelected(getRandomNum)

    console.log('changed paged! Previous page: ', getRandomNum)
  }
  
  const votes = () => {
    
    const newVoteArray = [...votearray] //make copy

    newVoteArray[selected] +=1 //update curr quote

    setVoteArray(newVoteArray) //update array with copy array

    countPage()
  }
 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votearray[selected]} votes</p>
      <Button onHulkSmash={votes} name='vote' />
      <Button onHulkSmash={flipPage} name='next anecdote' />
      <Leaderboard votearray={votearray} anecdotes={anecdotes} />
    </div>
  )
}

export default App