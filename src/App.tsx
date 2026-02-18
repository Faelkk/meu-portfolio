
import './App.css'
import Projects from './Components/Projects/Projects'
import About from './views/About/About'
import Header from './views/Header/Header'
import Intro from './views/Intro/Intro'
import Skills from './views/Skills/Skills'


function App() {


  return (
    <section className='bg-gray-50 min-h-screen w-full'>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </section>
  )
}

export default App
