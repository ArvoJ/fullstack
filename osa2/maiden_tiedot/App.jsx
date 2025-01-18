import { useState, useEffect } from 'react'
import countryService from './services/countryService'
import Filter from './components/Filter.jsx'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'
import './index.css'

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState('')
  const [countries, setCountries] = useState(null)
  const [resultCountry, setResultCountry] = useState(null)

  useEffect(() => {
    if(!countries) {
      countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
    }
  }, [countries])

  useEffect(() => {
    if (!countries) {
      return
    }
    if (countriesToShow.length === 1) { 
      countryService
        .getCountry(countriesToShow[0])
        .then(response => {
          setResultCountry(response)
        })
        .catch(e => console.log(e))
    }
    else {
      setResultCountry(null)
    }
  }, [searchedCountry])

  const handleFilterChange = event => {
    setSearchedCountry(event.target.value)
  }

  const filterCountries = countryList => {
    if (!countryList) {
      return []
    }
    const countryHit = countries.map(land => land["name"]["common"]).filter(nc =>
      nc.toLowerCase().includes(searchedCountry.toLowerCase())
    )
    return countryHit
  }
  
  const countriesToShow = filterCountries(countries)

  return (
    <div>
      <Filter text='find countries' filter={searchedCountry} handleChange={handleFilterChange}/>
      <Countries countries={countriesToShow} />
      <CountryInfo country={resultCountry} />
    </div>
  )
}

export default App
