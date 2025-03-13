// src/components/sections/Projects.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectMediaCarousel from '../ui/ProjectMediaCarousel';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is crafted with attention to detail, focusing on both functionality and user experience.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="relative mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Featured Projects</h3>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous project"
              >
                <FiChevronLeft size={20} className="text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next project"
              >
                <FiChevronRight size={20} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-full w-full"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700">
                        {/* Placeholder for project image */}
                        <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                          {project.title}
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex flex-col">
                      <h4 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4 mt-auto">
                        <button
                          onClick={() => openProjectDetails(project)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                          View Details
                        </button>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
                        >
                          <FiExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">All Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700">
                  {project.media && project.media.length > 0 ? (
                    <img
                      src={project.media[0].type === 'image' ? project.media[0].src : project.media[0].poster || ''}
                      alt={project.media[0].alt || project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                      {project.title}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => openProjectDetails(project)}
                      className="flex-1 px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-75"
              onClick={closeProjectDetails}
            ></div>

            <motion.div
              className="relative bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-800 dark:text-white z-10"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>

              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">{selectedProject.title}</h3>

                <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700 mb-6 rounded-lg overflow-hidden">
                  {/* Placeholder for project image */}
                  {selectedProject.media && selectedProject.media.length > 0 ? (
                    <div className="mb-6">
                      <ProjectMediaCarousel media={selectedProject.media} />
                    </div>
                  ) : (
                    <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700 mb-6 rounded-lg overflow-hidden">
                      <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                        {selectedProject.title}
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.longDescription}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <FiExternalLink size={18} />
                    <span>View Live Demo</span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
                  >
                    <FiGithub size={18} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
