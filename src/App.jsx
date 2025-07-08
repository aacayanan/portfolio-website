import './App.css'
import PortfolioCard from "./components/PortfolioCard.jsx";
import AboutCard from "./components/AboutCard.jsx";
import data from "./data.json";
import TechCard from "./components/TechCard.jsx";

function App() {

  return (
    <div>
      <PortfolioCard
          jobHeader={data.portfolio["job-header"]}
          description={data.portfolio.description}
          location={data.portfolio.location}
      />
      <AboutCard content={data.about.content} />
      <TechCard
          languages={data.technologies.languages}
          frameworks={data.technologies.frameworks}
      />
    </div>
  )
}

export default App
