import React from "react";
import Sales from "./Sales";
import "./Home.css";
import "./Sales.css";

import myImage1 from "../../images/gta.jpg";     // Update the path from '../images' to '../../images'
import myImage2 from "../../images/fifa24.jpg";  // Update the path from '../images' to '../../images'
import myImage3 from "../../images/nba24.jpg";   // Update the path from '../images' to '../../images'
import myImage4 from "../../images/callof.jpg";  
import myImage5 from "../../images/sp.jpg"; 
import myImage6 from "../../images/thelast.jpg"; 
import myImage7 from "../../images/jum.jpg"; 
import myImage8 from "../../images/god.jpg"; 
import myImage9 from "../../images/dia.jpg"; 
import Wish from "../../Components/Wish/Wish";

function Home() {
  const items = [
    { id: 1, name: "Fifa 24",price: 240, src: myImage2 },
    { id: 2, name: "GTA V", price: 340, src: myImage1 },
    { id: 3, name: "NBA 24", price: 215 ,src: myImage3 },
    { id: 4, name: "Call of Duty", price: 255,src: myImage4 },
   { id: 5, name: "Spider Man", price: 211,src: myImage5 },
    {id: 6, name: "The last of us", price: 166,src: myImage6 },
    {id: 7, name: "Jumanji", price: 113,src: myImage7 },
    {id: 8, name: "God Of War", price: 399,src: myImage8 },
    {id: 9, name: "Diablo", price: 299,src: myImage9 }
  ];

  const siteData = [
    { id: 1, title: "Fifa 24 - מחירו באתר  240" },
    { id: 2, title: "GTA V -  מחירו באתר  340" },
    { id: 3, title: "NBA 24 - מחירו באתר  215" },
    { id: 4, title: "Call of Duty- מחירו באתר  255" },
    { id: 5, title: "Spider Man -  מחירו באתר  211" },
    { id: 6, title: "The last of us - מחירו באתר  166" },
    { id: 7, title: "Jumanji - מחירו באתר 113" },
    { id: 8, title: "God Of War - מחירו באתר  399" },
    { id: 9, title: "Diablo - מחירו באתר  299" },
    // Add more games with a "title" property
  ];


  return (
    <div className="Home">
     
      <Sales items={items} />
      <Wish siteData={siteData} /> {/* Pass siteData as a prop */}
    
    </div>
  );
}

export default Home;