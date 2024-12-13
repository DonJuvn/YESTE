import React, { useState } from "react";

const Portfolio = () => {
   const portfolioItems = [
      {
         id: 1,
         coverImage: "img/p1.png",
         description: "Т/с 'Әділ Зере'. АО 'РТРК Казахстан'",
         link: "https://example.com/project1",
      },
      {
         id: 2,
         coverImage: "img/p2.png",
         description: "Odnako Podcast",
         link: "https://example.com/project2",
      },
      {
         id: 3,
         coverImage: "img/p3.png",
         description: "К/ф 'Шекара'",
         link: "https://example.com/project3",
      },
      {
         id: 4,
         coverImage: "img/p4.png",
         description: "Nurik Barmakov - Ты не такая как все",
         link: "https://example.com/project3",
      },
      {
         id: 5,
         coverImage: "img/p5.png",
         description: "Веб-сериал UIA.kz",
         link: "https://example.com/project3",
      },
      {
         id: 6,
         coverImage: "img/p6.png",
         description: "Qazaqtelecom Podcast",
         link: "https://example.com/project3",
      },
      {
         id: 7,
         coverImage: "img/p7.png",
         description: "Audi Italy",
         link: "https://example.com/project3",
      },
      {
         id: 8,
         coverImage: "img/p8.png",
         description: "Polaroid",
         link: "https://example.com/project3",
      },
      {
         id: 9,
         coverImage: "img/p9.png",
         description: "Nike Italy",
         link: "https://example.com/project3",
      },
      {
         id: 10,
         coverImage: "img/p10.png",
         description: "CFT group",
         link: "https://example.com/project3",
      },
      {
         id: 11,
         coverImage: "img/p11.png",
         description: "DSQUARED2",
         link: "https://example.com/project3",
      },
   ];

   const [currentItem, setCurrentItem] = useState(0);

   const handlePaginationClick = (index) => {
      setCurrentItem(index);
   };

   return (
      <div id="portfolio">
         <div className="container">
            <h1 id="title">Реализованные проекты</h1>
            <div className="portfolio">
               {portfolioItems.map((item) => (
                  <div className="item" key={item.id}>
                     <div className="container">
                        <div className="img">
                           <img
                              id="cover"
                              src={item.coverImage}
                              alt={item.description}
                           />
                        </div>
                        <p>{item.description}</p>
                        <a
                           href={item.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src="img/link.svg" alt="Link" />
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
