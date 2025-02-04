const Filter = ({showPerson, handleLookUpPerson}) => {
    
    return(
        <div>
        filtered by: <input value={showPerson} onChange={handleLookUpPerson}/>
        </div>
    )
}

export default Filter