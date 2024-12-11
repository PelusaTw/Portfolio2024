import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/landingPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import NewsletterPage from './components/NewsletterPage';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
