import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = countries.filter(country =>
    country?.name?.common.toLowerCase().includes(filterCountry.toLowerCase())
  )

  const handleSearchChange = (event) => {
    setFilterCountry(event.target.value)
  }

  return (
    <div>
      find countries{' '}
      <input value={filterCountry} onChange={handleSearchChange} />

      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App