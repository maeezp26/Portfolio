import './App.css';
import {Routes,Route} from 'react-router-dom'; 
import Home from './Containers/Home/Home'
import About from './Containers/About/About'
import Resume from './Containers/Resume/Resume'
import Skills from './Containers/Skill/Skills'
import Portfolio from './Containers/Portfolio/Portfolio'
import Contact from './Containers/Contact/Contact'
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
  <div className='App'>
    {/* Particles.js */}

    {/* Navbar */}
    <Navbar />

    {/* Main Page Content  */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Resume' element={<Resume />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/Contact' element={<Contact />} />
      
    </Routes>
    
  </div>
  );
}

export default App;
