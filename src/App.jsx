import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tick from './components/Tick.jsx'
import FormatName from './components/FormatName.jsx'
import Clock from "./components/Clock.jsx";
import LoggingButton from './components/LogginButton.jsx'
import WarningBanner from './components/WarningBanner.jsx'
import NumberList from './components/NumberList.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [showWarning, setShowWarning] = useState(true)
  const pAsVariable = <p>p used as a variable</p>
  const numbers = [1, 2, 3, 4, 5, "Skoro cislo"];
  
  function handleToggleClick() {
    showWarning? setShowWarning(false) : setShowWarning(true);
  }

  return (
    <>
      <FormatName user={"Pawns"}></FormatName>
      <FormatName user={"Mittens"}></FormatName>
      <Tick name={"Snow"}></Tick>
      {pAsVariable}
      <Clock></Clock>
      <LoggingButton></LoggingButton>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
      </button>
      <NumberList props={numbers}></NumberList>
    </>
  )
}

export default App
