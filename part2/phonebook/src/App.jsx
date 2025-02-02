import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '8650 4006'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name : newName,
      number : newNumber
    }

    const personExists = persons.find(person => person.name === newName)
    
    if (personExists === undefined){
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      return
    }


    alert(`${newName} is already added to phonebook`);
    //clear input
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      debug: {newName}
      debug: {newNumber}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name : <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          phonenumber : <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <p key={person.name}> {person.name} {person.number} </p>
        ))}
      </ul>
    </div>
  )
}

export default App