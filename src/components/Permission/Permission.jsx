import "./Permission.css";
import React, { useState } from "react";

function Permission() {
  const [inputValue, setInputValue] = useState(""); // สำหรับเก็บค่าที่กรอก
  const [namesList, setNamesList] = useState([]); // สำหรับเก็บรายการชื่อบุคลากร
  const [confirmedData, setConfirmedData] = useState([]); // สำหรับเก็บข้อมูลที่ยืนยัน

  // ฟังก์ชันจัดการการเปลี่ยนแปลงค่าของ input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // ฟังก์ชันจัดการการส่งข้อมูล (เพิ่มชื่อในลิสต์)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setNamesList([
        {
          name: inputValue,
          status: "ใช้งาน", // สถานะการใช้งาน
          department: "IT", // หน่วยงาน
          documentAccess: false, // การเข้าถึงเอกสาร (toggle)
          permission: false, // การจัดการสิทธิ์เข้าถึง (toggle)
          report: false, // การจัดการรายงาน (toggle)
        },
        ...namesList,
      ]); // เพิ่มชื่อใหม่ในลิสต์
      setInputValue(""); // เคลียร์ช่องกรอก
    }
  };

  // ฟังก์ชันเพื่อ toggle สถานะการเข้าถึง
  const toggleAccess = (index, field) => {
    const updatedNamesList = [...namesList];
    updatedNamesList[index][field] = !updatedNamesList[index][field];
    setNamesList(updatedNamesList);
  };

  // ฟังก์ชันสำหรับยืนยันข้อมูล
  const handleConfirm = () => {
    setConfirmedData(namesList);
    alert("ข้อมูลทั้งหมดได้รับการยืนยัน!");
  };

  return (
    <div className="permission-container">
      <h3>จัดการสิทธิ์ในการเข้าถึง</h3>

      {/* ฟอร์มกรอกชื่อบุคลากร */}
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="กรอกรหัสบุคลากร หรือ ชื่อบุคลากร"
        />
        <button className="add-btn" type="submit">
          +
        </button>
      </form>

      {/* ตารางแสดงรายชื่อบุคลากรและข้อมูลอื่นๆ */}
      <div className="names-list">
        <table>
          <thead>
            <tr>
              <th>บุคลากร</th>
              <th>สถานะการใช้งาน</th>
              <th>หน่วยงาน</th>
              <th>การจัดการเอกสาร</th>
              <th>การจัดการสิทธิ์เข้าถึง</th>
              <th>การจัดการรายงาน</th>
            </tr>
          </thead>
          <tbody>
            {namesList.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.status}</td>
                <td>{person.department}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={person.documentAccess}
                      onChange={() => toggleAccess(index, "documentAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={person.permission}
                      onChange={() => toggleAccess(index, "permission")}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={person.report}
                      onChange={() => toggleAccess(index, "report")}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ปุ่มยืนยันที่ด้านขวาล่าง */}
      <div className="confirm-btn-container">
        <button className="confirm-btn" onClick={handleConfirm}>
          ยืนยัน
        </button>
      </div>
    </div>
  );
}

export default Permission;
