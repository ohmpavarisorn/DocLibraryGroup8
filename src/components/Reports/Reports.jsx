import React from "react";
import Slider from "react-slick";
import './Reports.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// ฟังก์ชันสำหรับปุ่ม Next (ขวา)
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "transparent",
      color: "#fff",
      border: "none",
      width: "20%",
      height: "100%",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    &gt;
  </button>
);

// ฟังก์ชันสำหรับปุ่ม Prev (ซ้าย)
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "transparent",
      color: "#fff",
      border: "none",
      width: "20%",
      height: "100%",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    &lt;
  </button>
);

const Reports = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // เพิ่มปุ่มขวา
    prevArrow: <PrevArrow />, // เพิ่มปุ่มซ้าย
  };

  const images = [
    "../../assets/Reports/SolarCell.jpg",
    "https://media.discordapp.net/attachments/1286344294826770433/1304843423865634877/vintage-camera-pencil-open-laptop-twig-isolated-white-background.jpg?ex=6730dda3&is=672f8c23&hm=c21c555b9b519fada7024acbbafcdc2489168eb6769918602254be5621b046b3&=&format=webp&width=878&height=586",
    "https://media.discordapp.net/attachments/1286344294826770433/1304843395918729236/13311383_v602-nunoon-50-rippednotes.jpg?ex=6730dd9c&is=672f8c1c&hm=01e3dbff45397e8bbbab02d755683e72ca5789aefe268c36a4d3565c61acd0b6&=&format=webp&width=878&height=586",
  ];




  return (
    <>
    <div className="aWholeContent">
      <div className="reports-header">
        <Slider {...settings} style={{ width: "100%" }}>
          {images.map((img, index) => (
            <div key={index} style={{ height: "200px" }}>
              <img src={img} style={{ width: "100%", margin: "0", height: "300px", objectFit: "cover" }} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="content">
        <div className="flex1">
          <div className="Document-section"></div>
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
