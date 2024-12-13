import React from "react";
const Counters = () => {
   return (
      <div id="counters">
         <div className="container">
            <div className="counters">
               <div id="1" className="item">
                  <h1 id="counter">10.000.000+</h1>
                  <p>просмотров в социальных сетях</p>
               </div>
               <div id="2" className="item">
                  <h1 id="counter">10</h1>
                  <p>
                     кинопроектов <br />
                     собственного производства
                  </p>
               </div>
               <div id="3" className="item">
                  <h1 id="counter">100+</h1>
                  <p>проектов</p>
               </div>
               <div id="4" className="item">
                  <p>более</p>
                  <h1 id="counter">20</h1>
                  <p>партнеров</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Counters;
