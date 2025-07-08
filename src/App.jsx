import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PortfolioCard from "./components/PortfolioCard.jsx";
import AboutCard from "./components/AboutCard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PortfolioCard />
        <AboutCard content={"this is test content for the AboutCard component."} />
    </div>
  )
}

export default App
