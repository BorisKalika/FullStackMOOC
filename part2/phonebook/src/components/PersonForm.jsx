const PersonForm = ({addPerson, newName, newNumber, handlePersonChange, handleNumberChange}) =>{

    return(
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
    )
}

export default PersonForm