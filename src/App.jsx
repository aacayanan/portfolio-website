import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PortfolioCard from "./components/PortfolioCard.jsx";
import AboutCard from "./components/AboutCard.jsx";
import data from "./data.json";

function App() {

  return (
    <div>
      <PortfolioCard jobHeader={data.portfolio["job-header"]} description={data.portfolio.description} location={data.portfolio.location}/>
        <AboutCard content={"this is test content for the AboutCard component."} />
    </div>
  )
}

export default App
