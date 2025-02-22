import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Books from "./components/BooksSlider/Books.jsx";
import LoginRegister from "./components/LoginRegister/LoginRegister.jsx"; // Import LoginRegister component
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Books />
                <Footer />
              </>
            }
          />
          {/* Login/Register Page Route */}
          <Route path="/loginRegister" 
          element={
          <>
          <LoginRegister /> 
          <Footer />
          </>
        } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
