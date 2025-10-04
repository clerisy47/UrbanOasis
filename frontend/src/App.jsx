import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X, Info, MapPin, Brain, BookOpen, Home } from 'lucide-react';
// ============================================================
// ROUTING SYSTEM
// ============================================================
const RouterContext = React.createContext();

const Router = ({ children }) => {
  const getPath = () => {
    const hash = window.location.hash;
    return hash ? hash.slice(1) : '/';
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPath());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = `#${path}`;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

const Route = ({ path, component: Component }) => {
  const { currentPath } = React.useContext(RouterContext);
  return currentPath === path ? <Component /> : null;
};

const Link = ({ to, children, className }) => {
  const { navigate } = React.useContext(RouterContext);
  return (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      className={className}
    >
      {children}
    </a>
  );
};
// ============================================================
// SHARED COMPONENTS - components/shared/
// ============================================================

// InfoButton Component
const InfoButton = ({ source }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <button className="w-8 h-8 bg-sage/20 hover:bg-sage/40 border border-sage/40 rounded flex items-center justify-center transition-all duration-300">
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

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-floral/80 backdrop-blur-lg border-b border-sage/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-brunswick">
            Urban Oasis
          </Link>
          
          <div className="flex gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/map"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              Map
            </Link>
            <Link
              to="/quiz"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <Brain className="w-4 h-4" />
              Quiz
            </Link>
            <Link
              to="/know-more"
              className="flex items-center gap-2 text-brunswick hover:text-sage transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              Know More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ============================================================
// KNOW MORE COMPONENTS - pages/KnowMore/
// ============================================================

const ExpandablePanel = ({ title, content, dataSource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-floral/40 backdrop-blur-lg rounded-2xl border border-sage/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4 flex-1">
          <h3 className="text-xl font-serif font-semibold text-brunswick">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <InfoButton source={dataSource} />
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-brunswick" />
          ) : (
            <ChevronDown className="w-6 h-6 text-brunswick" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <p className="text-brunswick/80 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

// ============================================================
// QUIZ COMPONENTS - pages/Quiz/
// ============================================================

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

      <div className="relative">
        <div className="bg-floral/40 backdrop-blur-lg rounded-3xl p-8 border border-sage/20 shadow-xl">
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

// ============================================================
// MAP COMPONENTS - pages/Map/
// ============================================================

const MapPlaceholder = () => {
  return (
    <div className="flex-1 bg-beige/20 rounded-2xl border-2 border-sage/30 flex items-center justify-center">
      <div className="text-center p-8">
        <MapPin className="w-16 h-16 text-brunswick/40 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-semibold text-brunswick mb-2">
          Interactive Map
        </h3>
        <p className="text-brunswick/60">
          Map visualization with GeoJSON layers, heatmaps, and markers
        </p>
        <p className="text-sm text-brunswick/40 mt-4">
          (React Leaflet integration would be implemented here)
        </p>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-floral/40 backdrop-blur-lg rounded-2xl border border-sage/20 p-6 shadow-lg">
      <h3 className="text-xl font-serif font-semibold text-brunswick mb-4">
        Map Controls
      </h3>
      <div className="space-y-3">
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Districts
        </button>
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Municipalities
        </button>
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Heatmap
        </button>
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Markers
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-sage/20">
        <h4 className="text-sm font-semibold text-brunswick mb-2">Legend</h4>
        <div className="space-y-2 text-sm text-brunswick/70">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>High Intensity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Medium Intensity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Low Intensity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// PAGE COMPONENTS - pages/
// ============================================================

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage text-brunswick pt-20">
      <section className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <Link
                  to="/map"
                  className="bg-gradient-to-r from-sage to-brunswick text-floral px-8 py-4 rounded-xl font-sans font-semibold hover:from-brunswick hover:to-sage transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Explore Map
                </Link>
                <Link
                  to="/quiz"
                  className="bg-floral text-brunswick px-8 py-4 rounded-xl font-sans font-semibold hover:bg-beige transition-all duration-300 border border-sage/20"
                >
                  Take Quiz
                </Link>
              </div>
            </div>

            <div className="hidden lg:block h-[550px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="w-full h-full rounded-3xl overflow-hidden bg-beige/20 border border-sage/30 flex items-center justify-center">
                <p className="text-brunswick/40">3D Spline Scene</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      <footer className="py-12 px-6 border-t border-sage/20 bg-floral text-center font-sans">
        <p className="text-brunswick/90">© 2025 Urban Oasis. Nurtured with calm and code</p>
      </footer>
    </div>
  );
};

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-serif font-bold text-brunswick mb-8">Interactive Map</h1>
        
        <div className="flex gap-6 h-[calc(100vh-250px)]">
          <Sidebar />
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
};

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

const KnowMorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage pt-20">
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h2 className="text-5xl font-serif font-bold text-brunswick">Discover Our Features</h2>
          <p className="text-lg font-sans text-brunswick/70">
            Click to explore what makes us unique
          </p>
        </div>

        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          <ExpandablePanel 
            title="Lightning Fast Performance" 
            content="Experience seamless interactions and instant load times with optimized rendering and efficient architecture." 
            dataSource="NASA MODIS satellite data provides real-time monitoring of urban infrastructure performance and environmental conditions."
          />
          <ExpandablePanel 
            title="Beautiful Design System" 
            content="Every pixel is crafted with care, blending modern aesthetics and soft gradients for an elegant experience." 
            dataSource="Landsat imagery from NASA Earth Observatory helps visualize urban green spaces and aesthetic planning zones."
          />
          <ExpandablePanel 
            title="Enterprise-Grade Security" 
            content="We prioritize your privacy with end-to-end encryption, secure authentication, and regular audits." 
            dataSource="NASA SEDAC (Socioeconomic Data and Applications Center) provides population density and infrastructure security data."
          />
          <ExpandablePanel 
            title="Global Accessibility" 
            content="Our platform adapts fluidly to every device and meets global accessibility standards." 
            dataSource="NASA Earthdata provides global coverage for accessibility planning, including terrain analysis and connectivity mapping."
          />
        </div>
      </section>
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

export default function App() {
  return (
    <Router>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --floral: #FAF3E0;
          --sage: #A3B18A;
          --brunswick: #344E41;
          --beige: #E5D4C1;
        }
        
        .bg-floral { background-color: var(--floral); }
        .bg-sage { background-color: var(--sage); }
        .bg-brunswick { background-color: var(--brunswick); }
        .bg-beige { background-color: var(--beige); }
        
        .text-floral { color: var(--floral); }
        .text-sage { color: var(--sage); }
        .text-brunswick { color: var(--brunswick); }
        .text-beige { color: var(--beige); }
        
        .border-sage { border-color: var(--sage); }
        .border-brunswick { border-color: var(--brunswick); }
        
        .bg-sage\/20 { background-color: rgba(163, 177, 138, 0.2); }
        .bg-sage\/30 { background-color: rgba(163, 177, 138, 0.3); }
        .bg-sage\/40 { background-color: rgba(163, 177, 138, 0.4); }
        .bg-floral\/40 { background-color: rgba(250, 243, 224, 0.4); }
        .bg-floral\/80 { background-color: rgba(250, 243, 224, 0.8); }
        .bg-beige\/10 { background-color: rgba(229, 212, 193, 0.1); }
        .bg-beige\/20 { background-color: rgba(229, 212, 193, 0.2); }
        .bg-beige\/30 { background-color: rgba(229, 212, 193, 0.3); }
        
        .text-brunswick\/40 { color: rgba(52, 78, 65, 0.4); }
        .text-brunswick\/60 { color: rgba(52, 78, 65, 0.6); }
        .text-brunswick\/70 { color: rgba(52, 78, 65, 0.7); }
        .text-brunswick\/80 { color: rgba(52, 78, 65, 0.8); }
        .text-brunswick\/90 { color: rgba(52, 78, 65, 0.9); }
        
        .border-sage\/20 { border-color: rgba(163, 177, 138, 0.2); }
        .border-sage\/30 { border-color: rgba(163, 177, 138, 0.3); }
        .border-sage\/40 { border-color: rgba(163, 177, 138, 0.4); }
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <Navigation />
      
      <Route path="/" component={HomePage} />
      <Route path="/map" component={MapPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/know-more" component={KnowMorePage} />
    </Router>
  );
}