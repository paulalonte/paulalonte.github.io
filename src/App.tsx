import { useState } from "react";

// Import all images from assets folder
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import image9 from "./assets/image9.jpg";
import image10 from "./assets/image10.jpg";
import image11 from "./assets/image11.jpg";
import image12 from "./assets/image12.jpg";
import image13 from "./assets/image13.jpg";
import image14 from "./assets/image14.jpg";
import image15 from "./assets/image15.jpg";
import image16 from "./assets/image16.jpg";
import image17 from "./assets/image17.jpg";
import image18 from "./assets/image18.jpg";
import image19 from "./assets/image19.jpg";
import image20 from "./assets/image20.jpg";
import image21 from "./assets/image21.jpg";
import image22 from "./assets/image22.jpg";
import image23 from "./assets/image23.jpg";
import image24 from "./assets/image24.jpg";
import image25 from "./assets/image25.jpg";
import image26 from "./assets/image26.jpg";
import image27 from "./assets/image27.jpg";
import image28 from "./assets/image28.jpg";
import image29 from "./assets/image29.jpg";
import image30 from "./assets/image30.jpg";
import image31 from "./assets/image31.jpg";
import image32 from "./assets/image32.jpg";
import image33 from "./assets/image33.jpg";
import image34 from "./assets/image34.jpg";
import image35 from "./assets/image35.jpg";
import image36 from "./assets/image36.jpg";
import image37 from "./assets/image37.jpg";
import image38 from "./assets/image38.jpg";
import image39 from "./assets/image39.jpg";
import image40 from "./assets/image40.jpg";
import image41 from "./assets/image41.jpg";
import image42 from "./assets/image42.jpg";
import image43 from "./assets/image43.jpg";
import image44 from "./assets/image44.jpg";
import image45 from "./assets/image45.jpg";
import image46 from "./assets/image46.jpg";
import image47 from "./assets/image47.jpg";
import image48 from "./assets/image48.jpg";
import image49 from "./assets/image49.jpg";
import image50 from "./assets/image50.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToWork = () => {
    const workSection = document.getElementById("work-section");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              about<span className="text-paul">paul</span>
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center">
            <h1 className="heading text-gray-900 dark:text-white">
              Hi, I'm Paul
            </h1>
            <p className="subheading">Senior Frontend Engineer</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I build beautiful, functional, and user-centered digital
              experiences by combining modern frontend technologies with
              AI-powered tools. This allows me to accelerate development, design
              workflows, and deliver impactful solutions more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={scrollToWork}>
                View My Work
              </button>
              <button className="btn-secondary">Download Resume</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading text-center">About Me</h2>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
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
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to stackoverflow, or sharing knowledge with the
                developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Angular
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section
        id="work-section"
        className="section bg-gray-50 dark:bg-gray-800"
      >
        <div className="container">
          <h2 className="heading text-center">My Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here's a collection of my projects
          </p>

          {/* Responsive Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-44 xl:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <h3 className="font-semibold text-sm">
                      Project {index + 1}
                    </h3>
                    <p className="text-xs mt-1">Click to view details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p>&copy; 2024 aboutpaul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
