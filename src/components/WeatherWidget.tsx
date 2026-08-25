import { useState, useEffect } from "react"
import WeatherImage from "../assets/images/icon-weather.svg"

const weatherCodeToText: Record<number, string> = {
  0: "Clear sky",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  80: "Rain showers",
  95: "Thunderstorm",
}

const WeatherWidget = () => {
  const [temperature, setTemperature] = useState<number | null>(null)
  const [weatherCode, setWeatherCode] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=43.21&longitude=5.54&current=temperature_2m,weather_code,wind_speed_10m"
        )
        const data = await response.json()
        setTemperature(data.current.temperature_2m)
        setWeatherCode(data.current.weather_code)
      } catch (error) {
        console.error("Failed to fetch weather:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  const weatherText = weatherCode !== null ? weatherCodeToText[weatherCode] ?? "Unknown" : ""

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-tr from-sun-300 to-sun-200 p-4">
      <img
        src={WeatherImage}
        alt=""
        className="absolute -top-6 -right-6 w-24 pointer-events-none"
      />
      <h2 className="font-dm-mono uppercase tracking-widest text-neutral-900 text-xs">
        Today in Cassis
      </h2>

      {loading ? (
        <p className="font-fraunces text-neutral-950 text-2xl mt-2">Loading…</p>
      ) : (
        <>
          <p className="font-fraunces text-neutral-950 text-4xl mt-1">{temperature}°</p>
          <p className="font-dm-mono tracking-widest text-neutral-900 text-md mt-1">
            {weatherText}
          </p>
        </>
      )}
    </div>
  )
}

export default WeatherWidget;