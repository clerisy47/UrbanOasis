import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { quizData } from '../utils/quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const isCorrect = index === quizData[currentQuestion].correct;
    setAnswers([...answers, isCorrect]);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
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
      <div className="max-w-4xl mx-auto text-center font-sans">
        <div className="bg-sage/30 rounded-3xl p-12 shadow-lg border border-sage/40 animate-pulse">
          <h3 className="text-3xl font-serif font-semibold text-brunswick mb-4">
            {score === quizData.length ? "Sustainability Champion" :
             score >= 3 ? "Great Eco-Awareness" : "Keep Learning"}
          </h3>
          <p className="text-4xl font-bold text-brunswick mb-2">{score}/{quizData.length}</p>
          <button
            onClick={restartGame}
            className="bg-brunswick text-floral px-8 py-3 rounded-xl font-semibold hover:bg-brunswick/90 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 relative">
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="relative flex justify-between items-center">
          {quizData.map((_, index) => {
            const isPast = index < currentQuestion;
            const isCurrent = index === currentQuestion;
            return (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
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

      <div className="bg-floral/40 backdrop-blur-lg rounded-3xl p-8 border border-sage/20 shadow-xl">
        <h3 className="text-2xl font-serif font-semibold text-brunswick mb-8">{question.question}</h3>
        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correct;
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
  );
};

export default Quiz;
