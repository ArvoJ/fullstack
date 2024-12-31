import { useState } from 'react'

const Filter = ({searchItem, filteredPersons, handleInputChange, persons}) => {  
    
  return (
    <>
      <p>filter shown with <input
        type="text"
        name="filterfield"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      /></p>
      
        {filteredPersons.map(user => <p key={persons.id}>
          {user.name}  {user.number}</p>)}
      
    </>
  )
}

const Persons = ({ person }) => {
  return (
    <p>{person.name} {' '}
     {person.number}</p>
  )
}

const PersonForm = ({addPerson, newName, handleNewName, newNumber, handleNewNumber}) => { 
  return(
    <form onSubmit={addPerson}>
    <div>
      name:<input 
      value={newName}
      onChange={handleNewName} />
    </div>
    <div>
      number: <input
      value={newNumber}
      onChange={handleNewNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
    </form>
  )
        
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
    
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }
    const isFound = persons.some(person => 
      person.name === newName)
    if (isFound){
      alert(`${newName} is already added to phonebook`)
    }
    else {
    setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
    
}
 
const handleInputChange = (event) => {
  const searchTerm = event.target.value;
  setSearchItem(searchTerm)
  
  const filteredItems = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  setFilteredPersons(filteredItems)
}

   const handleNewName = (event) => {
   // console.log(event.target.value)
    setNewName(event.target.value)
  }

   const handleNewNumber = (event) => {
    setNewNumber (event.target.value)
   }
   
   return(
   <div>
    <h2>Phonebook</h2>
      <Filter searchItem = {searchItem} filteredPersons = {filteredPersons} 
      handleInputChange = {handleInputChange} persons= {persons}/>
      
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNewName = {handleNewName} 
      newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      
      <h3>Numbers</h3>
      {persons.map(person => 
    <Persons key={person.id} person={person} 
    />
  )}
      </div>
  
   )
}

export default App