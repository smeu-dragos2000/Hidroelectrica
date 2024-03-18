import './App.css'

import NavBar from './components/NavBar'
import CalculDeversare from './components/CalculDeversare'
import PageCalculOre from './components/PageCalculOre' 
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <div className='navBar'>
        <NavBar/>
      </div>
      <div id='calculOre'>
        <PageCalculOre />
      </div>
      <div id='deversare'>
        <CalculDeversare />
      </div>
      <div className='footer-container'>
      <Footer />
      </div>
      
      
    </div>
  )
}

export default App
