import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CollegeFinderPage from './pages/CollegeFinderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/college-finder" element={<CollegeFinderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;