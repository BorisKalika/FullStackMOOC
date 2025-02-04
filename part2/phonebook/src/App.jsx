import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'arto Hellas', number: '123-123-123', id: 5}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')

 
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

  const handleLookUpPerson = (event) => {
    console.log(event.target.value)
    setShowPerson(event.target.value)
  }

  return (
    <div>
      debug: {newName}
      debug: {newNumber}
      debug: {showPerson}
      <h2>Phonebook</h2>
      <Filter showPerson={showPerson} handleLookUpPerson={handleLookUpPerson} />
      <h2>Add a new entry</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Person persons={persons} showPerson={showPerson} />
    </div>
  )
}

export default App