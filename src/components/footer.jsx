import React from "react";const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <div className="footer">
               <div className="logo">
                  <img src="img/logo.svg" alt="" />
               </div>
               <div className="social-media">
                  <a href="#">
                     Instagram
                     <img src="img/link.svg" alt="" />
                  </a>
                  <a href="#">
                     Youtube
                     <img src="img/link.svg" alt="" />
                  </a>
                  <a href="#">
                     info@yeste.kz
                     <img src="img/link.svg" alt="" />
                  </a>
               </div>
               <div className="line"></div>
               <div className="text">
                  <p>Мы всегда рады любым идеям и предложениям</p>
                  <a href="#">
                     Связаться с нами
                     <img src="img/link.svg" alt="" />
                  </a>
               </div>
               <div className="confi">
                  <p>
                     © 2024. <br />
                     Все права защищены.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
