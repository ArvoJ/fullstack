import AllCountries from './AllCountries'

const Countries = props => {
    const note = ' matches, specify another filter'
    if (!props.countries) {
      return null
    }
    const length = props.countries.length
    if (length > 10) {
      return <div>Too many{note}</div>
    }
    if (length === 1) {
      return null
    }
    if (length < 1) {
      return <div>No{note}</div>
    }
    if (length <= 10) {
      return <AllCountries names={props.countries}
        showButtonHandler={props.showButtonHandler}/>
    }
    return <div>No{note}</div>
  }

  export default Countries