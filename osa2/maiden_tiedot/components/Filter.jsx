const Filter = props =>
    (
      <div>
        {props.text} <input id="filter" autoComplete="name"
        value={props.filter} onChange={props.handleChange}/>
      </div>
    )
    
    export default Filter