import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaHeart, FaCode, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                Mukesh Dhadhariya
              </h2>
              <p className="mt-4 text-gray-400">
                Passionate Web Developer and tech entrepreneur creating innovative solutions for education.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Skills</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">React & Next.js</li>
              <li className="text-gray-400">Node.js & Express</li>
              <li className="text-gray-400">JavaScript & TypeScript</li>
              <li className="text-gray-400">Firebase & MongoDB</li>
              <li className="text-gray-400">Tailwind CSS</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-700 p-2 rounded-full mr-3">
                  <FaEnvelope className="text-white" />
                </div>
                <span className="text-gray-400">contact@mukesh.com</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://yourportfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center text-gray-400 mb-4 md:mb-0"
          >
            <span className="mr-1">Made with</span>
            <FaHeart className="text-red-500 mx-1" />
            <span className="ml-1">by Mukesh Dhadhariya</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 mb-4 md:mb-0"
          >
            <span>© {new Date().getFullYear()} All rights reserved</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-3 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 flex items-center"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;