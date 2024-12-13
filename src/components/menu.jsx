import React from "react";
const Menu = () => {
   return (
      <div id="menu">
         <div className="container">
            <div className="menu">
               <div className="logo">
                  <img src="img/logo.svg" alt="" />
               </div>
               <div className="navigation">
                  <a href="#about">О нас</a>
                  <a href="#portfolio">Портфолио</a>
                  <a href="#" id="call">
                     Связаться с нами <img src="img/link.svg" alt="" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Menu;
