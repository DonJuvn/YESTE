import React from "react";

const SplashScreen = ({ isAnimating }) => {
   return (
      <div className={`splash-screen ${!isAnimating ? "animate-out" : ""}`}>
         <img src="img/logo.svg" alt="Logo" className="logo" />
      </div>
   );
};

export default SplashScreen;
