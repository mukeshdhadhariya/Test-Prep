import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaCode,
  FaServer,
  FaDatabase,
  FaPaintBrush,
  FaMobile,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  const skills = [
    { name: "React", icon: <FaCode />, color: "from-blue-500 to-blue-600" },
    { name: "Node.js", icon: <FaServer />, color: "from-green-500 to-green-600" },
    { name: "JavaScript", icon: <FaCode />, color: "from-yellow-500 to-yellow-600" },
    { name: "Firebase", icon: <FaDatabase />, color: "from-purple-500 to-purple-600" },
    { name: "Tailwind CSS", icon: <FaPaintBrush />, color: "from-pink-500 to-pink-600" },
    { name: "Python", icon: <FaCode />, color: "from-gray-500 to-gray-600" },
    { name: "Responsive Design", icon: <FaMobile />, color: "from-indigo-500 to-indigo-600" },
  ];

  const socialLinks = [
    { href: "https://github.com/", icon: <FaGithub /> },
    { href: "https://linkedin.com/", icon: <FaLinkedin /> },
    { href: "https://twitter.com/", icon: <FaTwitter /> },
    { href: "https://yourportfolio.com", icon: <FaGlobe /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:py-16 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start"
        >
          {/* Profile Image + Info */}
          <div className="flex flex-col items-center text-center md:w-1/3 md:pr-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=774&q=80"
              alt="Mukesh Dhadhariya"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-800">
              Mukesh Dhadhariya
            </h1>
            <p className="text-gray-500">Rajasthan, India</p>
            <p className="mt-2 text-sm text-blue-600 font-medium">
              Web Developer & Aspiring Entrepreneur
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* About Content */}
          <div className="mt-8 md:mt-0 md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hi 👋 I'm Mukesh, a passionate{" "}
              <span className="font-semibold text-blue-600">Web Developer</span>{" "}
              and aspiring tech entrepreneur. I enjoy building clean, scalable
              web apps that solve real-world problems and make education smarter
              and more accessible.
            </p>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-gray-200 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🌟 My Vision
              </h3>
              <p className="text-gray-600">
                To create platforms that empower students preparing for exams
                like NEET, JEE, and beyond — making learning simpler, engaging,
                and impactful through technology.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className={`bg-gradient-to-r ${skill.color} text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow hover:shadow-md`}
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> Let's Connect
              </h3>
              <p className="text-blue-100 mb-4">
                Always open to discussing projects, creative ideas, or
                opportunities to collaborate.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold py-2.5 px-6 rounded-full shadow hover:shadow-md transition"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
