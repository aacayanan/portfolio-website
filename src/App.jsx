import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PortfolioCard from "./components/PortfolioCard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PortfolioCard />
    </div>
  )
}

export default App
