import React, { useEffect } from "react";
const logosData = [
   { id: 1, src: "img/logo1.svg" },
   { id: 2, src: "img/logo2.svg" },
   { id: 3, src: "img/logo3.svg" },
   { id: 4, src: "img/logo4.svg" },
   { id: 5, src: "img/logo5.svg" },
   { id: 6, src: "img/logo6.svg" },
   { id: 8, src: "img/logo8.svg" },
   { id: 9, src: "img/logo9.svg" },
   { id: 10, src: "img/logo10.svg" },
   { id: 11, src: "img/logo11.svg" },
   { id: 12, src: "img/logo12.svg" },
   { id: 13, src: "img/logo1.svg" },
   { id: 14, src: "img/logo2.svg" },
   { id: 15, src: "img/logo3.svg" },
   { id: 16, src: "img/logo4.svg" },
   { id: 17, src: "img/logo5.svg" },
   { id: 18, src: "img/logo6.svg" },
   { id: 19, src: "img/logo8.svg" },
   { id: 20, src: "img/logo9.svg" },
   { id: 21, src: "img/logo10.svg" },
   { id: 22, src: "img/logo11.svg" },
   { id: 23, src: "img/logo12.svg" },
];

const Logos = () => {
   return (
      <div id="logos">
         <div className="container">
            <h1 id="title">Нам доверяют</h1>
            <div className="logos">
               {logosData.map((logo) => (
                  <div className="item" key={logo.id}>
                     <img src={logo.src} alt="" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Logos;
