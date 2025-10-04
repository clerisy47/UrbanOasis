import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import Spline from '@splinetool/react-spline';

// Reusable Expandable Panel
const ExpandablePanel = ({ title, content, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-floral/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-sage/20 transition-all duration-300 hover:border-sage/40 shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left transition-all duration-300 hover:bg-sage/10"
      >
        <div className="flex items-center gap-4">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-2xl font-serif font-semibold text-brunswick">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-brunswick w-6 h-6" />
        ) : (
          <ChevronDown className="text-brunswick w-6 h-6" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 pt-0 text-brunswick/80 font-sans leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

// Interactive Quiz Component
const MCQTrivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const questions = [
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Mars"], correct: 1 },
    { question: "Which programming language is known as the 'language of the web'?", options: ["Python", "Java", "JavaScript", "C++"], correct: 2 },
    { question: "What year did the World Wide Web become publicly available?", options: ["1989", "1991", "1995", "2000"], correct: 1 },
    { question: "Which element has the chemical symbol 'Au'?", options: ["Silver", "Gold", "Copper", "Aluminum"], correct: 1 },
    { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], correct: 2 }
  ];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === questions[currentQuestion].correct) setScore(prev => prev + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else setGameFinished(true);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <div className="text-center font-sans">
        <div className="bg-sage/30 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-sage/40">
          <h3 className="text-3xl font-serif font-semibold text-brunswick mb-4">Quiz Complete 🎉</h3>
          <p className="text-4xl font-bold text-brunswick mb-2">{score}/{questions.length}</p>
          <p className="text-lg text-brunswick/80 mb-8">
            {score === questions.length ? "Perfect Score! 🌟" : 
             score >= questions.length * 0.7 ? "Great Job! 👏" : 
             "Keep Practicing! 💪"}
          </p>
          <button
            onClick={restartGame}
            className="bg-brunswick text-floral px-8 py-3 rounded-xl font-semibold hover:bg-brunswick/90 transition-all duration-300"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto font-sans">
      <div className="bg-floral/40 backdrop-blur-lg rounded-3xl p-8 border border-sage/20 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <span className="text-brunswick/80 font-medium">
            Question {currentQuestion + 1}/{questions.length}
          </span>
          <span className="bg-sage/20 px-4 py-2 rounded-full text-brunswick font-semibold">
            Score: {score}
          </span>
        </div>

        <h3 className="text-2xl font-serif font-semibold text-brunswick mb-8">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-4 mb-6">
          {questions[currentQuestion].options.map((option, index) => {
            const isCorrect = index === questions[currentQuestion].correct;
            const isSelected = index === selectedAnswer;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 ${
                  selectedAnswer === null
                    ? 'bg-beige/10 hover:bg-beige/20 text-brunswick border border-sage/20'
                    : isSelected
                    ? isCorrect
                      ? 'bg-sage text-floral border border-sage/70'
                      : 'bg-brunswick text-floral border border-brunswick/80'
                    : isCorrect && showResult
                    ? 'bg-sage/50 text-brunswick border border-sage/60'
                    : 'bg-beige/5 text-brunswick/60 border border-sage/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && isSelected && (
                    isCorrect ? <Check className="w-5 h-5 text-floral" /> : <X className="w-5 h-5 text-floral" />
                  )}
                  {showResult && !isSelected && isCorrect && (
                    <Check className="w-5 h-5 text-sage" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full bg-sage text-brunswick py-4 rounded-xl font-semibold text-lg hover:bg-sage/90 transition-all duration-300"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage text-brunswick">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <span className="bg-beige/20 text-brunswick px-4 py-2 rounded-full text-sm font-sans font-medium border border-sage/20 inline-block">
                ✨ Welcome to Urban Oasis
              </span>

              <h1 className="text-6xl lg:text-7xl font-serif font-bold text-brunswick leading-tight tracking-tight">
                Experience
                <span className="bg-gradient-to-r from-sage to-brunswick bg-clip-text text-transparent"> Innovation</span>
              </h1>

              <p className="text-xl font-sans text-brunswick/80 leading-relaxed">
                Dive into an interactive world where technology meets creativity. 
                Explore, learn, and engage with cutting-edge experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-sage to-brunswick text-floral px-8 py-4 rounded-xl font-sans font-semibold hover:from-brunswick hover:to-sage transition-all duration-300 transform hover:scale-105 shadow-md">
                  Get Started
                </button>
                <button className="bg-floral text-brunswick px-8 py-4 rounded-xl font-sans font-semibold hover:bg-beige transition-all duration-300 border border-sage/20">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right 3D Model */}
            <div className="hidden lg:block h-[550px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <Spline scene="https://prod.spline.design/iskBy8WZaEPz4H0O/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Lights */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h2 className="text-5xl font-serif font-bold text-brunswick">Discover Our Features</h2>
          <p className="text-lg font-sans text-brunswick/70">
            Click to explore what makes us unique
          </p>
        </div>

        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          <ExpandablePanel icon="🚀" title="Lightning Fast Performance" content="Experience seamless interactions and instant load times with optimized rendering and efficient architecture." />
          <ExpandablePanel icon="🎨" title="Beautiful Design System" content="Every pixel is crafted with care, blending modern aesthetics and soft gradients for an elegant experience." />
          <ExpandablePanel icon="🔒" title="Enterprise-Grade Security" content="We prioritize your privacy with end-to-end encryption, secure authentication, and regular audits." />
          <ExpandablePanel icon="🌐" title="Global Accessibility" content="Our platform adapts fluidly to every device and meets global accessibility standards." />
        </div>
      </section>

      {/* Trivia Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h2 className="text-5xl font-serif font-bold text-brunswick">Test Your Knowledge</h2>
          <p className="text-lg font-sans text-brunswick/70">
            Challenge yourself with our interactive trivia quiz
          </p>
        </div>
        <div className="mt-12">
          <MCQTrivia />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-sage/20 bg-floral text-center font-sans">
        <p className="text-brunswick/90">© 2025 Urban Oasis. Nurtured with calm and code 🌿</p>
      </footer>
    </div>
  );
}
