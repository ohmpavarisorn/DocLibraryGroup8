import React, { useState, useEffect } from 'react';
import './SliderComponent.css';

const SliderComponent = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ฟังก์ชันสำหรับเลื่อนภาพไปข้างหน้า
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // ฟังก์ชันสำหรับเลื่อนภาพไปข้างหลัง
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ใช้ useEffect สำหรับ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // เลื่อนทุก 3 วินาที

    return () => clearInterval(interval); // ลบ interval เมื่อ component ถูกลบ
  }, [slides.length]); // ใช้ slides.length เป็น dependency

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div
        className="slider-slide-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slider-slide" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="slider-caption">{slide.title}</div>
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default SliderComponent;
