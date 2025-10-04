import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h2 className="text-5xl font-serif font-bold text-brunswick">How Sustainable Are You?</h2>
          <p className="text-lg font-sans text-brunswick/70">
            Test your knowledge on sustainable urban planning and environmental practices
          </p>
        </div>
        <div className="mt-12">
          <Quiz />
        </div>
      </section>
      <Footer />
    </div>
  );
}
