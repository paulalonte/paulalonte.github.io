import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { images } from "./images/images";
import resume from "./assets/paul-alonte-cv.pdf";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

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
              {/* Language Switcher */}
              <LanguageSwitcher />

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
              {t("hero.greeting")}
            </h1>
            <p className="subheading transition-colors duration-300">
              {t("hero.title")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-colors duration-300">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={scrollToWork}>
                {t("hero.viewWork")}
              </button>
              <button className="btn-secondary" onClick={downloadResume}>
                {t("hero.downloadCV")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <h2 className="heading text-center text-gray-900 dark:text-white transition-colors duration-300">
            {t("about.title")}
          </h2>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                {t("about.description1")}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                {t("about.description2")}
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

      {/* Skills Section */}
      <section className="section bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container">
          <h2 className="heading text-center text-gray-900 dark:text-white transition-colors duration-300">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12 transition-colors duration-300">
            Specialized areas where I excel in creating exceptional digital
            experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Development */}
            <div className="group bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  React, TypeScript, Angular and responsive web applications
                  with cutting-edge technologies
                </p>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="group bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  UI/UX
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Figma wireframes, user-centered design, and intuitive
                  interface creation
                </p>
              </div>
            </div>

            {/* Animation */}
            <div className="group bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Accessibility, WCAG, and inclusive design
                </p>
              </div>
            </div>

            {/* AI Tools */}
            <div className="group bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  AI Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  AI-powered development, automation, and intelligent workflow
                  optimization
                </p>
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
            {t("work.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12 transition-colors duration-300">
            {t("work.subtitle")}
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
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
