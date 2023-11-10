import './App.css';
import './components/portfolio.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route}from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
