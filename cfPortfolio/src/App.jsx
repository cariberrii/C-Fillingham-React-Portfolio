import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio/*" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
