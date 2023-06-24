import './App.css'
import WeatherWeb from './assets/components/WeatherWeb'

function App() {
  document.querySelector("html").setAttribute("theme","dark")
  return (
    <>
      <WeatherWeb />
    </>
  )
}

export default App
