import { useState,useEffect } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ProjectCard from './components/Project Card/Project Card'
import SkillCard from './components/Skill Card/Skill Card'
import ContactForm from './components/ContactForm/ContactForm'
import GitHubStats from './components/GitHubStats/GitHubStats'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)
  const projectsData = [
    { id: 1, title: 'Weather App', description: 'Real-time weather', tech: ['React', 'API'] },
    { id: 2, title: 'Portfolio Site', description: 'This very portfolio', tech: ['React', 'CSS'] },
    { id: 3, title: 'Todo Manager', description: 'Kanban task board', tech: ['JavaScript', 'HTML'] },
];
// 1. Initialize theme from localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // 2. Apply theme to body whenever it changes
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
 
  // 3. Toggle function
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* --- 2. Add the Hero Component Here! --- */}
      <Hero/>
      <main style={{ padding: '40px 5%', minHeight: '60vh', maxWidth: '1200px', margin: '0 auto' }}>
        {/* --- GITHUB STATS SECTION --- */}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>GitHub Profile</h2>
                
                {/* Notice how we wrap it in a div to easily control its layout */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
                    <GitHubStats username="aratrikasarkar-dev" /> {/* Replace with your username! */}
                </div>
                {/*SKILLS SECTION*/}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                    <SkillCard name="HTML5" level="Advanced" icon="🌐" />
                    <SkillCard name="CSS3" level="Advanced" icon="🎨" />
                    <SkillCard name="JavaScript" level="Intermediate" icon="⚡" />
                    <SkillCard name="React" level="Beginner" icon="⚛️" />
                </div>
                {/*PROJECTS SECTION*/}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Projects</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                    {projectsData.map(project => (
                      <ProjectCard
                      key={project.id}  //React needs a unique for lists!
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      />


                    ))}
                  </div>
                   {/*CONTACTS SECTION*/}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Get in Touch</h2>
                <ContactForm/>
      </main>
     <Footer/>
    </>
  )
}

export default App