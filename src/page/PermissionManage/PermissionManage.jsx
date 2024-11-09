import "./Permission.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า Bootstrap
import { Table, Button, Form } from "react-bootstrap"; // นำเข้า Table, Button, Form จาก Bootstrap

function Permission() {
  const [name, setName] = useState(""); // สำหรับเก็บชื่อที่กรอก
  const [status, setStatus] = useState("ออนไลน์"); // สำหรับเก็บสถานะการใช้งาน
  const [department, setDepartment] = useState(""); // สำหรับเก็บหน่วยงาน
  const [personnels, setPersonnels] = useState([]); // สำหรับเก็บข้อมูลบุคลากรที่เพิ่มใหม่

  // ฟังก์ชันเพิ่มชื่อบุคลากร
  const handleButtonClick = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อคลิกปุ่ม
    if (name.trim() && department.trim()) {
      const newPersonnel = {
        id: personnels.length + 1, // ตั้งค่า ID ให้กับข้อมูลใหม่
        name,
        status,
        department,
        documentManagement: false, // สถานะเริ่มต้นของการจัดการเอกสาร
      };
      setPersonnels([newPersonnel, ...personnels]); // เพิ่มข้อมูลบุคลากรใหม่
      setName(""); // เคลียร์ช่องกรอกชื่อ
      setStatus("ออนไลน์"); // รีเซ็ตสถานะ
      setDepartment(""); // เคลียร์ช่องกรอกหน่วยงาน
    }
  };

  // ฟังก์ชัน toggle การจัดการเอกสาร
  const toggleDocumentManagement = (id) => {
    setPersonnels((prevPersonnels) =>
      prevPersonnels.map((person) =>
        person.id === id
          ? { ...person, documentManagement: !person.documentManagement }
          : person
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">จัดการข้อมูลบุคลากร</h1>

      {/* ฟอร์มสำหรับกรอกข้อมูลบุคลากร */}
      <Form onSubmit={handleButtonClick}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>ชื่อบุคลากร</Form.Label>
          <Form.Control
            type="text"
            placeholder="กรอกชื่อบุคลากร"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="department" className="mb-3">
          <Form.Label>หน่วยงาน</Form.Label>
          <Form.Control
            type="text"
            placeholder="กรอกหน่วยงาน"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="status" className="mb-3">
          <Form.Label>สถานะการใช้งาน</Form.Label>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="ออนไลน์">ออนไลน์</option>
            <option value="ออฟไลน์">ออฟไลน์</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          เพิ่มบุคลากร
        </Button>
      </Form>

      {/* ตารางแสดงข้อมูลบุคลากร */}
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>ชื่อบุคลากร</th>
            <th>สถานะการใช้งาน</th>
            <th>หน่วยงาน</th>
            <th>การจัดการเอกสาร</th>
            <th>การจัดการสิทธิ์เข้าถึง</th>
             <th>การจัดการรายงาน</th>
          </tr>
        </thead>
        <tbody>
          {personnels.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.status}</td>
              <td>{person.department}</td>
              <td>
                <Button
                  variant={person.documentManagement ? "success" : "danger"}
                  onClick={() => toggleDocumentManagement(person.id)}
                >
                  {person.documentManagement ? "on" : "off"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Permission;
