import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')


  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name : newName,
      number : newNumber
    }

    const personExists = persons.find(person => person.name === newName)
    
    if (personExists === undefined){
      axios
        .post('http://localhost:3001/persons', personObject)
        .then((response) => {
          setPersons(persons.concat(response.data))
        })
      /*setPersons(persons.concat(personObject))*/
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