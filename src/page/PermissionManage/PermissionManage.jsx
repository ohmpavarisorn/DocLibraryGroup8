import "./PermissionManage.css";
import React, { useState } from "react";

function PermissionManage() {
  const [name, setName] = useState(""); // สำหรับเก็บชื่อที่กรอก
  const [namesList, setNamesList] = useState([]); // สำหรับเก็บลิสต์ชื่อ
  const [isToggled, setIsToggled] = useState(false); // สำหรับควบคุมการแสดงผลของลิสต์ชื่อ

  // ฟังก์ชันเพิ่มชื่อ
  const handleButtonClick = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อคลิกปุ่ม
    if (name.trim()) {
      setNamesList([name, ...namesList]); // เพิ่มชื่อที่กรอกไปยังด้านบนสุดของลิสต์
      setName(""); // เคลียร์ช่องกรอกชื่อ
    }
  };

  // ฟังก์ชัน toggle
  const toggleButton = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div>
      <h1>จัดการสิทธิ์ในการเข้าถึง</h1>
      
      {/* ฟอร์มสำหรับกรอกชื่อ */}
      <form>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="กรอกรหัสบุคลากร หรือ ชื่อบุคลากร"
        />
        <button type="submit" onClick={handleButtonClick}>
          +
        </button>
      </form>

      {/* ปุ่ม Toggle สำหรับแสดง/ซ่อนรายการ */}
      <button onClick={toggleButton}>{isToggled ? "ปิด" : "เปิด"}</button>

      {/* การแสดงรายการชื่อที่เพิ่ม */}
      {isToggled && (
        <div>
          <h2>รายชื่อบุคลากร</h2>
          <ul>
            {namesList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PermissionManage;
