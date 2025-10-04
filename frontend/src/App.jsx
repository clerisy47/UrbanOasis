import React from 'react';
import { Router, Route } from './router/Router';
import Navigation from './components/shared/Navigation';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import QuizPage from './pages/QuizPage';
import KnowMorePage from './pages/KnowMorePage';
import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" component={HomePage} />
      <Route path="/map" component={MapPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/know-more" component={KnowMorePage} />
    </Router>
  );
}