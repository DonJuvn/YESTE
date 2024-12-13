import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/menu";
import Video from "./components/video";
import Counters from "./components/counters";
import Portfolio from "./components/portfolio";
import Logos from "./components/logos";
import Footer from "./components/footer";
import SplashScreen from "./components/SplashScreen";

function App() {
   const [isAnimating, setIsAnimating] = useState(true);

   useEffect(() => {
      // Start animation after 3 seconds
      const timer = setTimeout(() => {
         setIsAnimating(false);
      }, 2000); // 3s delay + 1s animation
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className={`app ${isAnimating ? "hide-content" : ""}`}>
         <SplashScreen isAnimating={isAnimating} />
         <Menu />
         <Video />
         <Counters />
         <Portfolio />
         <Logos />
         <Footer />
      </div>
   );
}

export default App;
