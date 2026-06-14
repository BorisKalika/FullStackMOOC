import { useState } from 'react'
import CountryInfo from './CountryInfo'

const Countries = ({ countries }) => {
  const [shownCountry, setShownCountry] = useState(null)

  if (countries.length > 5) {
    return <p>Too many matches, specify another filter</p>
  }

  if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />
  }

  return (
    <div>
      {countries.map(country => (
        <p key={country.cca3}>
          {country?.name?.common}{' '}
          <button onClick={() => setShownCountry(country)}>show</button>
        </p>
      ))}

      {shownCountry && <CountryInfo country={shownCountry} />}
    </div>
  )
}

export default Countries