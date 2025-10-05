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
                                Design Smarter, Greener Cities
                                <span className="bg-gradient-to-r from-sage to-brunswick bg-clip-text text-transparent"> Innovation</span>
                            </h1>

                            <p className="text-xl font-sans text-brunswick/80 leading-relaxed">
                                An interactive platform empowering urban planners with real-time,
                                data-driven insights for sustainable and resilient development.
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
                    <h2 className="text-5xl font-serif font-bold text-brunswick">Explore Our Features</h2>
                    <p className="text-lg font-sans text-brunswick/70">
                        Discover sustainable urban planning tools and insights
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:border-sage/40 transition-all duration-300">
                        <h3 className="text-xl font-serif font-semibold text-brunswick mb-3">Interactive Maps</h3>
                        <p className="text-brunswick/70 mb-4">Explore detailed visualizations of urban data, including pollution levels, green spaces, and infrastructure.</p>
                        <button onClick={() => navigate('/map')} className="text-sage hover:text-brunswick transition-colors">
                            Explore Maps →
                        </button>
                    </div>

                    <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:border-sage/40 transition-all duration-300">
                        <h3 className="text-xl font-serif font-semibold text-brunswick mb-3">Sustainable Development Analysis and Recommendations</h3>
                        <p className="text-brunswick/70 mb-4">Analyze environmental data and urban planning metrics to make informed decisions.</p>
                    </div>


                    <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:border-sage/40 transition-all duration-300">
                        <h3 className="text-xl font-serif font-semibold text-brunswick mb-3">Recommendations</h3>
                        <p className="text-brunswick/70 mb-4">Get personalized recommendations for sustainable practices in your urban area based on the analysis.</p>
                    </div>

                    <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:border-sage/40 transition-all duration-300">
                        <h3 className="text-xl font-serif font-semibold text-brunswick mb-3">Real-time Monitoring</h3>
                        <p className="text-brunswick/70 mb-4">Track air quality, traffic patterns, and environmental changes in real-time.</p>
                    </div>


                    <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:border-sage/40 transition-all duration-300">
                        <h3 className="text-xl font-serif font-semibold text-brunswick mb-3">Sustainable Chatbot</h3>
                        <p className="text-brunswick/70 mb-4">Access to an intelligent chatbot for urban sustainability queries for your place.</p>
                    </div>

                    <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20 hover:border-sage/40 transition-all duration-300">
                        <h3 className="text-xl font-serif font-semibold text-brunswick mb-3">Sustainability Quiz</h3>
                        <p className="text-brunswick/70 mb-4">Test your knowledge about urban sustainability and learn about best practices.</p>
                    </div>


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