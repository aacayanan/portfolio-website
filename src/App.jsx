import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects.jsx';
import Experience from "./pages/Experience.jsx";
import {useEffect, useRef, useState} from "react";

function App() {
   // Separate state and refs for each section
   const [isHomeVisible, setIsHomeVisible] = useState(false);
   const [isExperienceVisible, setIsExperienceVisible] = useState(false);
   const [isSkillsVisible, setIsSkillsVisible] = useState(false);
   const [isProjectsVisible, setIsProjectsVisible] = useState(false);

   const homeRef = useRef(null);
   const experienceRef = useRef(null);
   const skillsRef = useRef(null);
   const projectsRef = useRef(null);

   // Observer for Home section
   useEffect(() => {
       const observer = new IntersectionObserver(
           ([entry]) => {
               if (entry.isIntersecting && !isHomeVisible) {
                   setIsHomeVisible(true);
                   observer.unobserve(entry.target);
               }
           },
           {
               threshold: 0.1,
               rootMargin: "-20% 0px -20% 0px"  // triggers when in % of viewport
           }
       );

       if (homeRef.current) {
           observer.observe(homeRef.current);
       }

       return () => observer.disconnect();
   }, [isHomeVisible]);

   // Observer for Experience section
   useEffect(() => {
       const observer = new IntersectionObserver(
           ([entry]) => {
               if (entry.isIntersecting && !isExperienceVisible) {
                   setIsExperienceVisible(true);
                   observer.unobserve(entry.target);
               }
           },
           {
               threshold: 0.1,
               rootMargin: "-20% 0px -20% 0px"  // triggers when in % of viewport
           }
       );

       if (experienceRef.current) {
           observer.observe(experienceRef.current);
       }

       return () => observer.disconnect();
   }, [isExperienceVisible]);

   // Observer for Skills section
   useEffect(() => {
       const observer = new IntersectionObserver(
           ([entry]) => {
               if (entry.isIntersecting && !isSkillsVisible) {
                   setIsSkillsVisible(true);
                   observer.unobserve(entry.target);
               }
           },
           {
               threshold: 0.1,
               rootMargin: "-20% 0px -20% 0px"  // triggers when in % of viewport
           }
       );

       if (skillsRef.current) {
           observer.observe(skillsRef.current);
       }

       return () => observer.disconnect();
   }, [isSkillsVisible]);

   // Observer for Projects section
   useEffect(() => {
       const observer = new IntersectionObserver(
           ([entry]) => {
               if (entry.isIntersecting && !isProjectsVisible) {
                   setIsProjectsVisible(true);
                   observer.unobserve(entry.target);
               }
           },
           {
               threshold: 0.1,
               rootMargin: "-20% 0px -20% 0px"  // triggers when in % of viewport
           }
       );

       if (projectsRef.current) {
           observer.observe(projectsRef.current);
       }

       return () => observer.disconnect();
   }, [isProjectsVisible]);

  return (
    <div>
      <Navbar />
      <div id="home" ref={homeRef} className={isHomeVisible ? 'animate-float-up opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}>
        <Home />
      </div>
      <div id="experience" ref={experienceRef} className={isExperienceVisible ? 'animate-float-up opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}>
        <Experience />
      </div>
      <div id="skills" ref={skillsRef} className={isSkillsVisible ? 'animate-float-up opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}>
        <Skills />
      </div>
      <div id="projects" ref={projectsRef} className={isProjectsVisible ? 'animate-float-up opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}>
        <Projects />
      </div>
    </div>
  );
}

export default App;