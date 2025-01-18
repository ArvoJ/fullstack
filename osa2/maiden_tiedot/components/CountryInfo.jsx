const CountryInfo = props => {
    if(!props.country) {
      return null
    }
    const result = Object.values(props.country.languages)
    return (
    <div>
      <h1>{props.country["name"]["common"]}</h1>
      <div>capital {props.country["capital"][0]}</div>
      <div>area {props.country.area}</div>
      <h4>languages:</h4>     
       <li> languages {result}</li>
      <img src={props.country.flags.png} alt={props.country.flags.alt}
        width="160"
      />
    </div>
    )
  }

  export default CountryInfo