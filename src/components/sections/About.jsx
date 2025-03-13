// src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { FiDownload, FiCalendar, FiAward, FiCode } from 'react-icons/fi';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* About Image */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full h-[420px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                  Your Image Here
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg z-10 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              About <span className="text-blue-600">Me</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate web developer with expertise in Ruby on Rails and modern frontend technologies. I specialize in creating responsive, user-friendly applications with clean code and intuitive interfaces.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              With a background in Science, Retail and Artistry, I bring a unique perspective to my development work. I enjoy solving complex problems and continuously learning new technologies to improve my craft.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FiCalendar />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">10+ Years</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FiCode />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-400">3+ Completed</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FiAward />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor's in Pharmaceutical Sciences & Master's in Analytical Chemistry</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Freelance</h4>
                  <p className="text-gray-600 dark:text-gray-400">Available</p>
                </div>
              </div>
            </div>

            <a
              href="/kv-resume.pdf"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
