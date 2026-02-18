
import './App.css'
import About from './views/About/About'
import Header from './views/Header/Header'
import Intro from './views/Intro/Intro'


function App() {


  return (
    <section className='bg-gray-50 min-h-screen w-full'>
      <Header />
      <Intro />
      <About />
    </section>
  )
}

export default App
