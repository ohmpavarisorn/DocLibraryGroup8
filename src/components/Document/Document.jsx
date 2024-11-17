import React, { useState } from "react";
import "./Document.css";

function Document() {
  const [documentName, setDocumentName] = useState("");
  const [fiscalYear, setFiscalYear] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [department, setDepartment] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const allowedFileTypes = ["application/pdf", "image/png", "application/zip"]; // กำหนดประเภทไฟล์ที่อนุญาต

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (allowedFileTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setErrorMessage("");
      } else {
        setFile(null);
        setErrorMessage("ประเภทไฟล์ไม่รองรับ (รองรับเฉพาะ PDF, PNG, ZIP)");
      }
    }
    setUploadSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("กรุณาเลือกไฟล์ก่อนส่ง");
      return;
    }

    console.log({
      documentName,
      fiscalYear,
      documentNumber,
      documentType,
      department,
      hashtag,
      additionalNotes,
      fileName: file.name,
      fileSize: file.size,
    });

    // แสดงข้อความสำเร็จเมื่ออัปโหลดข้อมูล
    setUploadSuccess(true);
    setErrorMessage("");
  };

  return (
    <div className="upload-page-container">
      <h2>อัปโหลดเอกสาร</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <label>ชื่อเอกสาร</label>
        <input
          type="text"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          placeholder="กรอกชื่อเอกสาร"
        />

        <label>ปีงบประมาณ</label>
        <select value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)}>
          <option value="">เลือก</option>
          <option value="2565">2565</option>
          <option value="2566">2566</option>
          <option value="2567">2567</option>
        </select>

        <label>เลขเอกสาร</label>
        <input
          type="text"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          placeholder="xxxxxxxx"
        />

        <label>ประเภทเอกสาร</label>
        <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
          <option value="">เลือกประเภท</option>
          <option value="ประเภท 1">หนังสือประชาสัมพันธ์</option>
          <option value="ประเภท 2">รายงานการประชุม</option>
          <option value="ประเภท 3">รายงานประจำปี</option>
          <option value="ประเภท 4">หนังสือรับรอง</option>
          <option value="ประเภท 5">หนังสือสั่งการข้อบังคับ</option>
        </select>

        <label>หน่วยงาน</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">เลือกหน่วยงาน</option>
          <option value="หน่วยงาน 1">สำนักงานรัฐมนตรี</option>
          <option value="หน่วยงาน 2">สำนักงานปลัดกระทรวงพลังงาน</option>
          <option value="หน่วยงาน 3">กรมเชื้อเพลิงธรรมชาติ</option>
          <option value="หน่วยงาน 4">กรมพัฒนาพลังงานทดแทน</option>
          <option value="หน่วยงาน 5">สำนักงานนโยบายและแผนงาน</option>
        </select>

        <label>คำเกี่ยวข้อง # (hashtag)</label>
        <input
          type="text"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />

        <label>คำอธิบายเพิ่มเติม</label>
        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        ></textarea>

        <button type="submit" className="btn btn-success" onClick={() => {
          alert('บันทึกสำเร็จ!');
        }}>
          บันทึก
        </button>
      </form>
      <div className="upload-container">
      <label>เลือกไฟล์</label>
        <input type="file" onChange={handleFileChange}/>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        </div>
    </div>
  );
}

export default Document;
