const Person = ({persons, showPerson, removePerson}) => {

  const filteredPersons = showPerson === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(showPerson.toLowerCase())
      )

  return (
    <div>
      {filteredPersons.map(person => (
        <div key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={() => removePerson(person)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}


export default Person