import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects.jsx';
import Experience from "./pages/Experience.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
        <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;