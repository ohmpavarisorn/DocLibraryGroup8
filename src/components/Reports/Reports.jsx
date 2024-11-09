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
    "https://media.discordapp.net/attachments/1286344294826770433/1304843340491264073/photo-1508514177221-188b1cf16e9d.jpg?ex=6730dd8f&is=672f8c0f&hm=98eb1593bf6d29c3d7ba7d7dc2950119bb60dc0a4a07023d381e2d05593489e1&=&format=webp&width=880&height=586",
    "https://media.discordapp.net/attachments/1286344294826770433/1304843423865634877/vintage-camera-pencil-open-laptop-twig-isolated-white-background.jpg?ex=6730dda3&is=672f8c23&hm=c21c555b9b519fada7024acbbafcdc2489168eb6769918602254be5621b046b3&=&format=webp&width=878&height=586",
    "https://media.discordapp.net/attachments/1286344294826770433/1304843395918729236/13311383_v602-nunoon-50-rippednotes.jpg?ex=6730dd9c&is=672f8c1c&hm=01e3dbff45397e8bbbab02d755683e72ca5789aefe268c36a4d3565c61acd0b6&=&format=webp&width=878&height=586",
  ];


  return (
    <div style={{ width: "100%", position: "relative", height: "200px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ height: "200px" }}>
            <img src={img} style={{ width: "100%", margin: "0", height: "300px", objectFit: "cover" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reports;
