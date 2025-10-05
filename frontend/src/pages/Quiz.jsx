import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

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
                      ? 'bg-[#FFD700] text-brunswick scale-110 ring-4 ring-[#FFD700]/30' 
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

function Quiz() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-floral via-beige to-sage text-brunswick">
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
}

export default Quiz;