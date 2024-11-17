const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
return (
    <div>
     <Header course = {course.name} />
     <Content parts = {course.parts} />
     <Total parts = {course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => { 
  console.log(props)
  const parts = props.parts
  return (
  <div>
    {parts.map((part) =>(
      <div key= {part.id}>
    <p>
       <span>{part.name}</span>
    
        <span>{part.exercises}</span>
       
      </p>
    </div>
    ))}
    </div>
    );
    }
    
const Total = (props) => {
  console.log(props)
  const parts = props.parts
  return(
      <>
        {parts.reduce((sum, item) => sum += item.exercises, 0)}
      </>
)
}

export default App
