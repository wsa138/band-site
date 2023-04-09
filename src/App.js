import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Music from './pages/Music';
import Contact from './pages/Contact';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="music" element={<Music />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <FooterNav />
    </div>
  );
}

export default App;
