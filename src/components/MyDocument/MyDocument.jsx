import React from "react";
import "./MyDocument.css";

const MyDocument = () => {
  const documents = Array(10).fill({
    name: "หนังสือรับรองการให้ความเห็นชอบเป็นผู้ตรวจสอบปีที่ตราเอียม.pdf",
    type: "หนังสือรับรอง",
    department: "กรมศิลปากรธรรมชาติ",
    date: "20 พ.ค. 2024",
  });

  return (
    <div className="my-document-container">
      <h2 className="my-document-title">My Document</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <button className="filter-button">ประเภท</button>
        <button className="filter-button">แก้ไขเมื่อ</button>
        <button className="filter-button">หน่วยงาน</button>
      </div>

      {/* Document Table */}
      <table className="document-table">
        <thead>
          <tr>
            <th>ชื่อ <span className="sort-icon">↑</span></th>
            <th>เอกสาร</th>
            <th>หน่วยงาน</th>
            <th>แก้ไขล่าสุด <span className="sort-icon">↓</span></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td className="document-name">
                <img src="/path/to/pdf-icon.png" alt="PDF Icon" className="pdf-icon" />
                {doc.name}
              </td>
              <td>{doc.type}</td>
              <td>{doc.department}</td>
              <td>{doc.date}</td>
              <td>
                <button className="more-options">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDocument;
