import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
import coms from './services/coms'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('')

  useEffect(() => {
    console.log('effect')
    coms
      .getAll()
      .then(getPerson => {
        console.log('promise fullfilled')
        setPersons(getPerson)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const removePerson = (person) => {
    const confirm = window.confirm(`Delete ${person.name}?`)
    if (!confirm) {
      return
    }
    coms
      .remove(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))

        setNotificationType('success')
        setNotificationMessage(`Delete ${person.name}`)

        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      .catch(error => {
        setNotificationType('error')
        setNotificationMessage(
          `Information of ${person.name} has already been removed from server`
        )

        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

        setPersons(persons.filter(person => person.id !== person.id))
      })
  } 

const addPerson = (event) => {
  event.preventDefault()

  const personObject = {
    name: newName,
    number: newNumber
  }

  const personExists = persons.find(person => person.name === newName)

  if (personExists) {
    const changedPerson = {
      ...personExists,
      number: newNumber
    }

    const ok = window.confirm(
      `${personExists.name} is already added to phonebook, replace the old number with a new one?`
    )

    if (!ok) {
      return
    }

    coms
      .update(personExists.id, changedPerson)
      .then(returnedPerson => {
        setPersons(
          persons.map(person =>
            person.id !== personExists.id ? person : returnedPerson
          )
        )

        setNotificationType('success')
        setNotificationMessage(`Changed number for ${returnedPerson.name}`)

        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)

        setNewName('')
        setNewNumber('')
      })

    return
  }

  coms
    .create(personObject)
    .then(newPerson => {
      setPersons(persons.concat(newPerson))

      setNotificationType('success')
      setNotificationMessage(`Added ${newPerson.name}`)

      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)

      setNewName('')
      setNewNumber('')
    })
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
      debug: {notificationMessage}
      debug: {notificationType}
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType}/>
      <Filter showPerson={showPerson} handleLookUpPerson={handleLookUpPerson} />
      <h2>Add a new entry</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Person persons={persons} showPerson={showPerson} removePerson={removePerson} />
    </div>
  )
}

export default App