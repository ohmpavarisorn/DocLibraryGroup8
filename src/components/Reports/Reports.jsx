import React from "react";
import Slider from "react-slick";
import SliderComponent from "./SliderComponent/SliderComponent"
import FileSummary from "./FileSummary/FileSummary";
import LatestFiles from "./LatestFiles/LatestFiles";
import './Reports.css';

const slides = [
  {
    image: 'https://media.discordapp.net/attachments/1286344294826770433/1307390188095537162/photo-1508514177221-188b1cf16e9dawda.jpg?ex=673a217e&is=6738cffe&hm=3bc31f4059e47cdbd6de5116eb0a0b4ea1ccdd9c176a715cb6052ffa971df98c&=&format=webp&width=1211&height=356',
    title: 'Slide 1',
  },
  {
    image: 'https://media.discordapp.net/attachments/1286344294826770433/1307389902228422677/vintage-camera-pencil-open-laptop-twig-isolated-white-backgroundawd.jpg?ex=673a213a&is=6738cfba&hm=3cc839161590c86b48cdfdb5bab6036c8aa5f955ab5cd51061c79a408d414dd9&=&format=webp&width=1211&height=446',
    title: 'Slide 2',
  },
  {
    image: 'https://media.discordapp.net/attachments/1286344294826770433/1307389902668828702/13311383_v602-nunoon-50-rippednotesasd.jpg?ex=673a213a&is=6738cfba&hm=b9452b5cdb9f737552defa97d5c58a44d27d140f8c7b7e5dfff9307a614e57cb&=&format=webp&width=1211&height=424',
    title: 'Slide 3',
  },
];

const Reports = () => {
  return (
    <>
      <div className="aWholeContent">
        <SliderComponent slides={slides}/>
        <div className="content">
          <div className="flex1">
            <div className="Document-section">

            </div>
            <div className="Document-type"></div>
          </div>
          <div className="flex2">
            <div className="Document-Upload"></div>
            <div className="Document-Delete"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
