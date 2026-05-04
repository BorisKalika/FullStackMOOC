const FilterID = ({persons, showPerson}) => {
    
    return(
        <ul>
            {persons.map(person => (
            <p key={person.id}> {person.id}</p>
            ))}
        </ul>
    ) 
}

export default FilterID

