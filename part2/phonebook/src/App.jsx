import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'arto Hellas', number: '123-123-123', id: 1}
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

  const filteredPerson = persons.filter(person => 
    person.name.toLowerCase().includes(showPerson.toLowerCase())
  )

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

  const mapping = () => {

    if (showPerson === ''){
      return(
      <ul>
        {persons.map(person => (
          <p key={person.name}> {person.name} {person.number} </p>
        ))}
      </ul>
      )
    }
    return(
    <ul>
      {filteredPerson.map(person => (
        <p key={person.name}> {person.name} {person.number}</p>
      ))}
    </ul>
    )
  }

  return (
    <div>
      debug: {newName}
      debug: {newNumber}
      debug: {showPerson}
      <h2>Phonebook</h2>
      <div>
        filtered by: <input value={showPerson} onChange={handleLookUpPerson}/>
      </div>
      <h2>Add a new entry</h2>
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
      {mapping()}
    </div>
  )
}

export default App