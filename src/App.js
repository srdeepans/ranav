import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home, About, Leaders, Projects, Gallery, Contact } from './pages';
import Home from './pages/home';
import About from './pages/about';
import Leaders from './pages/leaders';
import Projects from './pages/projects';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import noPage from './pages/noPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home />} />
      <Route path='/home' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/leaders' element = {<Leaders />} />
      <Route path='/projects' element = {<Projects />} />
      <Route path='/gallery' element = {<Gallery />} />
      <Route path='/contact' element = {<Contact />} />
            
      <Route path='/*' element = {<noPage />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
