import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => (
  <section className="min-h-screen relative overflow-hidden">
    <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <button className="bg-gradient-to-r from-sage to-brunswick text-floral px-8 py-4 rounded-xl font-sans font-semibold hover:from-brunswick hover:to-sage transition-all duration-300 transform hover:scale-105 shadow-md">
              Get Started
            </button>
            <button className="bg-floral text-brunswick px-8 py-4 rounded-xl font-sans font-semibold hover:bg-beige transition-all duration-300 border border-sage/20">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden lg:block h-[550px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-transparent rounded-3xl blur-3xl"></div>
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/iskBy8WZaEPz4H0O/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-20 left-10 w-72 h-72 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
  </section>
);

export default HeroSection;
