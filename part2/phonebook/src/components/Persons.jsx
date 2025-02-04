const Person = ({persons, showPerson}) => {

    const filteredPerson = persons.filter(person => 
        person.name.toLowerCase().includes(showPerson.toLowerCase())
      )

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

export default Person