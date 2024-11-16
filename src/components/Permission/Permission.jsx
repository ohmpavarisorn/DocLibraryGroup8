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
          documentAccess: false, // การเข้าถึงเอกสาร (toggle)
          permission: false, // การจัดการสิทธิ์เข้าถึง (toggle)
          report: false, // การจัดการรายงาน (toggle)
        },
        ...namesList,
      ]); // เพิ่มชื่อใหม่ในลิสต์
      setInputValue(""); // เคลียร์ช่องกรอก
    }
  };

  const handleDelete = (index) => {
    // ใช้ filter ลบแถวที่ตรงกับ index
    const updatedNamesList = namesList.filter((_, i) => i !== index);
    setNamesList(updatedNamesList);
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

  useEffect(() => {}, [])

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

      {/* ตารางแสดงรายชื่อ /*                                                                                     บุคลากรและข้อมูลอื่นๆ */}
      <div className="names-list">
        <table>
          <thead>
            <tr>
              <th>บุคลากร</th>
              <th className="align-right">การจัดการเอกสาร</th>
              <th className="align-right">การจัดการสิทธิ์เข้าถึง</th>
              <th className="align-right">การจัดการรายงาน</th>
            </tr>
          </thead>
          <tbody>
            {namesList.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  ไม่มีข้อมูล
                </td>
              </tr>
            ) : (
              namesList.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td className="align-center">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={person.documentAccess}
                        onChange={() => toggleAccess(index, "documentAccess")}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                  <td className="align-center">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={person.permission}
                        onChange={() => toggleAccess(index, "permission")}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                  <td className="align-center">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={person.report}
                        onChange={() => toggleAccess(index, "report")}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                  <td>
                    {/* ปุ่มลบ */}
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="confirm-btn-container">
        <button className="confirm-btn" onClick={handleConfirm}>
          ยืนยัน
        </button>
      </div>
    </div>
  );
}
export default Permission;
