import { useState } from 'react'

const Statistics = (props) => {
  
  if (props.allClicks == 0){
    return (
  <div>
    no feedback given
  </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
        <><tbody><tr><td>{text}</td><td>{value}</td></tr></tbody></>
    
  );
};
    return(  
      <div>
      <StatisticLine text="good" value ={props.good}></StatisticLine>
      <StatisticLine text="neutral" value ={props.neutral}></StatisticLine>
      <StatisticLine text="bad" value ={props.bad}></StatisticLine>
      <StatisticLine text="average" value = {(props.good-props.bad) / props.allClicks}></StatisticLine>
      <StatisticLine text="positive" value = {(props.good/props.allClicks * 100)+' %'}></StatisticLine>
      </div>
    )
  }
 
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  


  const props = {good, neutral, bad, allClicks }

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
    
  }
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
    
  }
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
    
  }
  
  return (
    <div>
      <div>
      
        <Button handleClick={handleGoodClick} text='good' />
       
        <Button handleClick={handleNeutralClick} text='neutral' />
        
        <Button handleClick={handleBadClick} text='bad' />
        

      <Statistics  {...props}/>
      </div>
      </div>
      )
      
    }

  
export default App