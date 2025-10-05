import React from 'react';
import MCQTrivia from '../components/Quiz/MCQTrivia';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage pt-20">
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h2 className="text-5xl font-serif font-bold text-brunswick">How Sustainable Are You?</h2>
          <p className="text-lg font-sans text-brunswick/70">
            Test your knowledge on sustainable urban planning and environmental practices
          </p>
        </div>
        <div className="mt-12">
          <MCQTrivia />
        </div>
      </section>
    </div>
  );
};

export default QuizPage;