import { useState } from "react";
import styles from "./header.module.css";
import WeatherSection1 from "./WeatherSection1";
import WeatherSection2 from "./WeatherSection2";
import WeatherSection3 from "./WeatherSection3";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";

const Header = () => {
  const [tab, setTab] = useState("Home");
  return (
    <>
      <div className={styles.showBox}>
        <div className="header-2">
          <nav className="bg-zinc-400 py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
              <div className="flex justify-between items-center">
                <a href="https://flowbite.com" className="flex items-center">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-3260422-2725115.png"
                    className="mr-3 h-14 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-stone-800">
                    Gokul's Weather App
                  </span>
                </a>

                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <button
                  onClick={() => setTab("Home")}
                  className={
                    tab === "Home"
                      ? "block p-2 lg:px-4 md:mx-2 text-white rounded bg-stone-800"
                      : "block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  Home
                </button>

                <button
                  onClick={() => setTab("Features")}
                  className={
                    tab === "Features"
                      ? "block p-2 lg:px-4 md:mx-2 text-white rounded bg-stone-800"
                      : "block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  Features
                </button>
                <button
                  onClick={() => setTab("Pricing")}
                  className={
                    tab === "Pricing"
                      ? "block p-2 lg:px-4 md:mx-2 text-white rounded bg-stone-800"
                      : "block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  Pricing
                </button>
                <button
                  onClick={() => setTab("Contact")}
                  className={
                    tab === "Contact"
                      ? "block p-2 lg:px-4 md:mx-2 text-white rounded bg-stone-800"
                      : "block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  Contact
                </button>
                <button
                  onClick={() => setTab("App")}
                  className={
                    tab === "App"
                      ? "block p-2 lg:px-4 md:mx-2 text-white rounded bg-stone-800"
                      : "block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  }
                >
                  App
                </button>
                <Link to="/login">
                  <button
                    onClick={() => setTab("Login")}
                    className="p-2 lg:px-4 md:mx-2 text-black text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    onClick={() => setTab("Signup")}
                    className="p-2 lg:px-4 md:mx-2 text-stone-800 text-center border border-solid border-stone-800 rounded hover:bg-stone-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                  >
                    Signup
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {tab === "Home" && (
        <div className={styles.showBox}>
          <WeatherSection1 />
          <WeatherSection2 />
          <WeatherSection3 />
        </div>
      )}

      {tab === "Features" && (
        <div className={styles.showBox}>
          <Features />
        </div>
      )}
      {tab === "Pricing" && (
        <div className={styles.showBox}>
          <Pricing />
        </div>
      )}
      {tab === "Contact" && (
        <div className={styles.showBox}>
          <Contact />
        </div>
      )}
      {tab === "App" && (
        <div className={styles.showBox}>
          <Home />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Header;
