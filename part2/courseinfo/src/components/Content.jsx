import Part from './Part'

//TODO: Inmplement that courseparts can be read; use map and key (check refactorign modules)
const Content = ({course}) => {
  console.log("content:", course)
  return(
    <ul>
      {course.parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </ul>
  )
}

export default Content