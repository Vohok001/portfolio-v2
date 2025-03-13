// src/components/sections/Hero.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SvgAvatar from '../ui/SvgAvatar';

const Hero = () => {
  // Text typing effect
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = [
    'Frontend Developer',
    'Ruby on Rails Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = phrases[index];

      if (text.length < currentPhrase.length) {
        setText(currentPhrase.substring(0, text.length + 1));
      } else {
        // Wait a bit at the end of the phrase
        setTimeout(() => {
          // Clear text
          setText('');
          // Move to next phrase
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, index, phrases]);

  // Scroll indicator animation
  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block py-1 px-3 mb-4 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-blue-600">Your Name</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-600 dark:text-gray-300 h-10"
              variants={itemVariants}
            >
              I'm a <span className="text-blue-600">{text}</span>
              <span className="animate-blink">|</span>
            </motion.h2>

            <motion.p
              className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg"
              variants={itemVariants}
            >
              Crafting beautiful, user-friendly web experiences with modern technologies.
              Let's build something amazing together.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 mt-8"
              variants={itemVariants}
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* SVG Avatar */}
          <motion.div
            className="hidden md:block"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <SvgAvatar />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
