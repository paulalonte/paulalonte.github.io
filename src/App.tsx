import { useState, useEffect } from "react";
import { images } from "./images/images";
import resume from "./assets/paul-alonte-cv.pdf";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference or if system prefers dark mode
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToWork = () => {
    const workSection = document.getElementById("work-section");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "paulalonte-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              about<span className="text-paul">paul</span>
            </h1>
            <div className="flex items-center space-x-4">
              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com/in/paulalonte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="text-center">
            <h1 className="heading text-gray-900 dark:text-white transition-colors duration-300">
              Hi, I'm Paul
            </h1>
            <p className="subheading transition-colors duration-300">
              Senior Frontend Engineer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-colors duration-300">
              I build beautiful, functional, and user-centered digital
              experiences by combining modern frontend technologies with
              AI-powered tools. This allows me to accelerate development, design
              workflows, and deliver impactful solutions more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={scrollToWork}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={downloadResume}>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <h2 className="heading text-center text-gray-900 dark:text-white transition-colors duration-300">
            About Me
          </h2>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                I currently work as a Senior Frontend Engineer in Berlin,
                Germany, where I focus on developing IoT software solutions for
                laboratory environments. My role involves building and
                maintaining cloud-based applications that enable the control and
                tracking of laboratory devices and data. Additionally, I
                leverage AI tools to enhance productivity, streamline workflows,
                and rapidly build applications more efficiently. Beyond
                technical development, I have experience working with UI/UX
                initiatives to deliver an outstanding user experience. I believe
                that clean, accessible, and efficient interfaces are essential
                to successful software, and I enjoy collaborating closely with
                design teams to bring that vision to life. Featured web
                applications that I've worked on are Samsung, Intel, L'Oreal,
                Samsonite, Mentos, Globe, Del Monte, Ayala, Maybelline, Lipton,
                Watsons, Dove, Garnier, Marlboro and Medicol. Feel free to view
                all my works.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                When I'm not coding, you can find me exploring new technologies,
                creating cinematic videos and animations, contributing to Stack
                Overflow, or sharing knowledge with the developer community
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transition-colors duration-300">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm transition-colors duration-300">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm transition-colors duration-300">
                  Angular
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm transition-colors duration-300">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-blue-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm transition-colors duration-300">
                  UI/UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section
        id="work-section"
        className="section bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container">
          <h2 className="heading text-center text-gray-900 dark:text-white transition-colors duration-300">
            My Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12 transition-colors duration-300">
            Here's a collection of my projects
          </p>

          {/* Responsive Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-700"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-44 xl:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300">
        <div className="container text-center">
          <p>&copy; 2024 aboutpaul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
