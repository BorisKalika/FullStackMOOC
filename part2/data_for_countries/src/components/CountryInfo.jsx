import { useEffect, useState } from 'react'
import axios from 'axios'

const CountryInfo = ({ country }) => {
  const languages = Object.values(country.languages)
  const [weather, setWeather] = useState(null)

  const [latitude, longtitude] = country?.capitalInfo?.latlng || []
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY

  useEffect(() => {
    if (latitude === undefined || longtitude === undefined) return

    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: { lat: latitude, lon: longtitude, appid: apiKey, units: 'metric' }
      })
      .then(response => {
        setWeather(response.data)
      })
  }, [latitude, longtitude, apiKey])

  return (
    <div>
      <h1>{country?.name?.common}</h1>

      <p>Capital {country?.capital[0]}</p>
      <p>Area {country?.area}</p>

      <h2>Languages</h2>

      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country?.flags?.png}
        alt={`flag of ${country?.name?.common}`}
        width="250"
      />

      <h2>Weather in {country?.capital[0]}</h2>

      {weather && (
        <div>
          <p>temperature {weather?.main?.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt={weather?.weather[0]?.description}
          />
          <p>wind {weather?.wind?.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default CountryInfo