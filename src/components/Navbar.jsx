import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // ✅ import firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null); // ✅ track logged-in user
  const navigate = useNavigate();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle Get Started
  const handleGetStarted = () => {
    navigate("/sign-in");
    setOpen(false);
  };

  // Handle Profile click
  const handleProfileClick = () => {
    navigate("/user-dashboard");
    setOpen(false);
  };

  // Optional: Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-green-50 to-blue-50 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold text-green-600 hover:text-green-700 transition-colors"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14L4 9V19L12 14Z" fill="currentColor" />
            <path d="M12 14L20 9V19L12 14Z" fill="currentColor" />
            <path d="M12 4L4 9L12 14L20 9L12 4Z" fill="currentColor" />
          </svg>
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            TestPrep
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/test-series"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors flex items-center"
            >
              Test Series
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors flex items-center"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors flex items-center"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors flex items-center"
            >
              Contact Us
            </Link>
          </li>

          {/* ✅ Conditional Button */}
          <li>
            {user ? (
              <div className="relative group">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <img
                    src={user.photoURL || "https://i.pravatar.cc/40"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden md:block font-medium text-gray-700">
                    {user.displayName || "Profile"}
                  </span>
                </button>

                {/* Dropdown on hover */}
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg hidden group-hover:block">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="menu-button md:hidden p-2 rounded-md text-gray-800 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`mobile-menu md:hidden bg-white shadow-lg transform origin-top transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <Link
            to="/test-series"
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
          >
            Test Series
          </Link>
          <Link
            to="/resources"
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            to="/contactus"
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
          >
            Contact Us
          </Link>

          {/* ✅ Conditional for mobile */}
          <div className="pt-4 px-4 border-t border-gray-100">
            {user ? (
              <button
                onClick={handleProfileClick}
                className="w-full text-center bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg font-medium text-gray-800"
              >
                Profile
              </button>
            ) : (
              <button
                onClick={handleGetStarted}
                className="w-full text-center bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
