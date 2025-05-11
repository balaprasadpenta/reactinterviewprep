'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            React Interview Prep
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Master React concepts with interactive examples and visualizations
          </motion.p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* React Hooks */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">React Hooks</h2>
            <p className="text-gray-300 mb-6">Explore React Hooks with interactive examples and visualizations</p>
            <Link 
              href="/interview/react/hookques"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start Learning
            </Link>
          </motion.div>

          {/* React Router */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">React Router</h2>
            <p className="text-gray-300 mb-6">Master routing concepts and navigation patterns</p>
            <Link 
              href="/interview/react/hookques"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start Learning
            </Link>
          </motion.div>

          {/* State Management */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">State Management</h2>
            <p className="text-gray-300 mb-6">Learn Redux, Context API, and other state management solutions</p>
            <Link 
              href="/interview/react/hookques"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start Learning
            </Link>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose This Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Interactive Learning</h3>
              <p className="text-gray-300">Learn by doing with live code examples</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Visual Explanations</h3>
              <p className="text-gray-300">Understand concepts through animations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Real-world Examples</h3>
              <p className="text-gray-300">Practical examples from industry</p>
            </div>
          </div>
        </motion.div>

        {/* Main Start Learning Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link 
            href="/interview/react/hookques"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            Start Your Learning Journey
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
