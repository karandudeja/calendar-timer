import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Today from './assets/Components/Today'
import DaysLeftThisYear from './assets/Components/DaysLeftThisYear'
import DaysLeftSlider from './assets/Components/DaysLeftSlider'
import TitleDivider from './assets/Components/TitleDivider'
import ObjectiveText from './assets/Components/ObjectiveText'
import WeekNumber from './assets/Components/WeekNumber'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      <hr/> */}
      <div className="m-8">
        <Today />
        <WeekNumber />
        <DaysLeftThisYear />
        <DaysLeftSlider />
        <TitleDivider title={"Objective"}/>
        <ObjectiveText />
      </div>
    </div>
  )
}

export default App
