import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X, Info } from 'lucide-react';
import Spline from '@splinetool/react-spline';

// Info Icon Button Component
const InfoButton = ({ source }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <button
        className="w-8 h-8 bg-sage/20 hover:bg-sage/40 border border-sage/40 rounded flex items-center justify-center transition-all duration-300"
      >
        <Info className="w-4 h-4 text-brunswick" />
      </button>

      {showInfo && (
        <div className="absolute left-12 top-0 z-50 w-64 bg-floral border-2 border-sage/40 rounded-xl p-4 shadow-xl">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-brunswick text-sm">Data Source</h4>
            <button
              onClick={() => setShowInfo(false)}
              className="text-brunswick/60 hover:text-brunswick"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-brunswick/80 leading-relaxed">{source}</p>
        </div>
      )}
    </div>
  );
};

// Reusable Expandable Panel
const ExpandablePanel = ({ title, content, icon, dataSource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
     <InfoButton source={dataSource} />
  );
};

// Interactive Quiz Component
const MCQTrivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const questions = [
    { 
      question: "What percentage of global greenhouse gas emissions come from cities?", 
      options: ["25%", "50%", "70%", "90%"], 
      correct: 2 
    },
    { 
      question: "Which practice best reduces urban heat island effect?", 
      options: ["More concrete", "Green roofs", "Wider roads", "Taller buildings"], 
      correct: 1 
    },
    { 
      question: "What is the most sustainable mode of urban transportation?", 
      options: ["Electric cars", "Buses", "Cycling", "Trains"], 
      correct: 2 
    },
    { 
      question: "How much water can a single tree absorb per day?", 
      options: ["10 liters", "50 liters", "100 liters", "500 liters"], 
      correct: 2 
    },
    { 
      question: "What is the ideal percentage of green space in a sustainable city?", 
      options: ["5%", "15%", "30%", "50%"], 
      correct: 2 
    }
  ];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const isCorrect = index === questions[currentQuestion].correct;
    setAnswers([...answers, isCorrect]);
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameFinished(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  const score = answers.filter(Boolean).length;

  if (gameFinished) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Progress Line with Results */}
        <div className="mb-12 relative">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300"></div>
          <div className="relative flex justify-between items-center">
            {questions.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
                    answers[index] ? 'bg-[#A3B18A]' : 'bg-[#904E55]'
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Section */}
        <div className="text-center font-sans">
          <div className="bg-sage/30 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-sage/40 animate-pulse">
            <h3 className="text-3xl font-serif font-semibold text-brunswick mb-4">
              {score === questions.length ? "Sustainability Champion" : 
               score >= 3 ? "Great Eco-Awareness" : 
               "Keep Learning"}
            </h3>
            <p className="text-4xl font-bold text-brunswick mb-2">{score}/{questions.length}</p>
            <p className="text-lg text-brunswick/80 mb-8">
              {score === questions.length ? "You have excellent knowledge of sustainable urban practices!" : 
               score >= 3 ? "You're well on your way to becoming a sustainability expert!" : 
               "Every step towards learning about sustainability matters!"}
            </p>
            <button
              onClick={restartGame}
              className="bg-brunswick text-floral px-8 py-3 rounded-xl font-semibold hover:bg-brunswick/90 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Line */}
      <div className="mb-12 relative">
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="relative flex justify-between items-center">
          {questions.map((_, index) => {
            const isPast = index < currentQuestion;
            const isCurrent = index === currentQuestion;
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 z-10 ${
                    isPast 
                      ? answers[index] 
                        ? 'bg-[#A3B18A] text-white' 
                        : 'bg-[#904E55] text-white'

                      : isCurrent 
                      ? 'bg-brunswick text-white scale-110' 
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="relative">
        <div 
          className="bg-floral/40 backdrop-blur-lg rounded-3xl p-8 border border-sage/20 shadow-xl"
          style={{
            transform: `translateX(${currentQuestion * 100 / questions.length}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-brunswick/80 font-medium">
              Question {currentQuestion + 1}/{questions.length}
            </span>
          </div>

          <h3 className="text-2xl font-serif font-semibold text-brunswick mb-8">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
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
                        ? 'bg-[#A3B18A] text-white border border-[#A3B18A]'
                        : 'bg-[#904E55] text-white border border-[#904E55]'
                      : isCorrect && showResult
                        ? 'bg-[#A3B18A]/50 text-brunswick border border-[#A3B18A]'
                      : 'bg-beige/5 text-brunswick/60 border border-sage/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && isSelected && (
                      isCorrect ? <Check className="w-5 h-5 text-white" /> : <X className="w-5 h-5 text-white" />
                    )}
                    {showResult && !isSelected && isCorrect && (
                      <Check className="w-5 h-5 text-brunswick" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-floral via-beige to-sage text-brunswick">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <span className="bg-beige/20 text-brunswick px-4 py-2 rounded-full text-sm font-sans font-medium border border-sage/20 inline-block">
                Welcome to Urban Oasis
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
                <button 
                  onClick={() => navigate('/map')}
                  className="bg-gradient-to-r from-sage to-brunswick text-floral px-8 py-4 rounded-xl font-sans font-semibold hover:from-brunswick hover:to-sage transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Explore Map
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
          <ExpandablePanel 
            icon="" 
            title="Lightning Fast Performance" 
            content="Experience seamless interactions and instant load times with optimized rendering and efficient architecture." 
            dataSource="NASA MODIS satellite data provides real-time monitoring of urban infrastructure performance and environmental conditions."
          />
          <ExpandablePanel 
            icon="" 
            title="Beautiful Design System" 
            content="Every pixel is crafted with care, blending modern aesthetics and soft gradients for an elegant experience." 
            dataSource="Landsat imagery from NASA Earth Observatory helps visualize urban green spaces and aesthetic planning zones."
          />
          <ExpandablePanel 
            icon="" 
            title="Enterprise-Grade Security" 
            content="We prioritize your privacy with end-to-end encryption, secure authentication, and regular audits." 
            dataSource="NASA SEDAC (Socioeconomic Data and Applications Center) provides population density and infrastructure security data."
          />
          <ExpandablePanel 
            icon="" 
            title="Global Accessibility" 
            content="Our platform adapts fluidly to every device and meets global accessibility standards." 
            dataSource="NASA Earthdata provides global coverage for accessibility planning, including terrain analysis and connectivity mapping."
          />
        </div>
      </section>

      {/* Trivia Section */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-sage/20 bg-floral text-center font-sans">
        <p className="text-brunswick/90">© 2025 Urban Oasis. Nurtured with calm and code</p>
      </footer>
    </div>
  );
}

export default Home;