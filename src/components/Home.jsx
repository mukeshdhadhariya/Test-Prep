import React, { useState, useEffect } from "react";
import Footer from "./Footer";

function Home() {
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10 transform skew-y-3 origin-top-left"></div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 50,000+ students
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Crack <span className="text-blue-600">NEET & JEE</span> with Confidence 🚀
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg">
              AI-powered test series designed for 11th, 12th, JEE, and NEET students with personalized feedback.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium rounded-lg shadow-sm transition-colors duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                View Demo
              </button>
            </div>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              No credit card required • 7-day free trial
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full opacity-50 animate-pulse delay-500"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform transition-transform duration-500 hover:scale-105">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Average improvement</p>
                    <p className="text-2xl font-bold text-green-600">+42%</p>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Mock Test #127</h3>
                <p className="text-sm text-gray-500 mt-1">Physics - Rotational Motion</p>
                <div className="mt-4 bg-gray-100 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full w-3/4 transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>75% completed</span>
                  <span>Time left: 24:36</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-700">28</div>
                    <div className="text-xs text-green-600">Correct</div>
                  </div>
                  <div className="p-2 bg-red-50 rounded-lg">
                    <div className="text-lg font-bold text-red-700">5</div>
                    <div className="text-xs text-red-600">Wrong</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">217</div>
                    <div className="text-xs text-blue-600">Rank</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Test Series?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide everything you need to succeed in your competitive exam journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Smart Test Series</h2>
            <p className="mt-4 text-gray-600">
              Practice with AI-powered curated questions, auto-evaluation, and instant feedback to identify your weak areas.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Chapter-wise tests</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full-length mock exams</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Previous year papers</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Performance Analytics</h2>
            <p className="mt-4 text-gray-600">
              Track progress with detailed reports, personalized recommendations, and comparative analysis.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Strength/weakness analysis</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>All India ranking</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Time management insights</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Affordable Plans</h2>
            <p className="mt-4 text-gray-600">
              High-quality test prep at pocket-friendly prices with flexible options for all students.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Free basic plan available</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Discounts for early enrollment</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Group packages</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recommended Resources</h2>
          <p className="mt-4 text-lg text-gray-600">
            Quality products and services to enhance your preparation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:scale-[1.02] group">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Sponsored
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-sm font-medium">Physics Wallah</span>
                <h3 className="text-xl font-bold mt-1">NEET Ultimate Kit</h3>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Complete study package with 10 books, 30 test series, and video solutions</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-gray-900">₹2,499</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹3,499</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:scale-[1.02] group">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Sponsored
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-sm font-medium">Allen</span>
                <h3 className="text-xl font-bold mt-1">JEE Study Material</h3>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Comprehensive study material with practice problems and solved examples</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-gray-900">₹3,999</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹4,999</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:scale-[1.02] group">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Sponsored
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-sm font-medium">Motion</span>
                <h3 className="text-xl font-bold mt-1">Test Series Package</h3>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">60+ full tests with detailed analysis and personalized feedback</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-gray-900">₹1,799</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹2,499</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">Advertisements help us keep our platform free for millions of students</p>
        </div>
      </section>

      {/* Promotional/Branding Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow with Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            We aim to empower students through structured test practice, smart analytics, and 
            guidance for a bright future. Join thousands already excelling with us!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50,000+</div>
              <div className="text-sm md:text-base opacity-80 mt-2">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-sm md:text-base opacity-80 mt-2">Tests Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">92%</div>
              <div className="text-sm md:text-base opacity-80 mt-2">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-sm md:text-base opacity-80 mt-2">Support</div>
            </div>
          </div>
          
          <button className="mt-10 px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto">
            Join Now - It's Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Home;