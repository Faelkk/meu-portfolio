
import './App.css'
import About from './views/About/About'
import ButtonScrollTop from './views/BtnTop/Button'
import Contact from './views/Contact/Contact'
import Footer from './views/Footer/Footer'
import Header from './views/Header/Header'
import Intro from './views/Intro/Intro'
import Experience from './views/Experience/Experience'
import Projects from './views/Projects/Projects'
import Skills from './views/Skills/Skills'


function App() {


  return (
    <section className='min-h-screen w-full bg-gray-50 text-gray-950 dark:bg-[#0a0d12] dark:text-gray-50'>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ButtonScrollTop />
    </section>
  )
}

export default App
