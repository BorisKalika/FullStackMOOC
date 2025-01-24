const Part = ({name, exercises}) => {

    console.log("Part:", name, exercises)

    return(
        <li>
            <p>
            {name} {exercises}
            </p>
        </li>
    )
}

export default Part