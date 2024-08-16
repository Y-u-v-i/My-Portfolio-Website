import './App.css'
import Projects from './Components/Projects';
import About from './Components/About';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Resume from './Components/Resume';
import Contact from './Components/contact';
import Footer from './Components/Footer';
function App(){
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;