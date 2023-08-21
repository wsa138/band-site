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
      <div id="pages-container">
        <Routes>
          <Route
            path="/"
            render={({ location }) => {
              window.ga('set', 'page', location.pathname + location.search);
              window.ga('send', 'pageview');
              return null;
            }}
            element={<Home />}
          ></Route>
          <Route
            path="about"
            render={({ location }) => {
              window.ga('set', 'page', location.pathname + location.search);
              window.ga('send', 'pageview');
              return null;
            }}
            element={<About />}
          ></Route>
          <Route
            path="music"
            render={({ location }) => {
              window.ga('set', 'page', location.pathname + location.search);
              window.ga('send', 'pageview');
              return null;
            }}
            element={<Music />}
          ></Route>
          <Route
            path="contact"
            render={({ location }) => {
              window.ga('set', 'page', location.pathname + location.search);
              window.ga('send', 'pageview');
              return null;
            }}
            element={<Contact />}
          ></Route>
        </Routes>
      </div>
      <FooterNav />
    </div>
  );
}

export default App;
