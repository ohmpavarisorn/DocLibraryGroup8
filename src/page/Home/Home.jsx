import React, { useState, useEffect } from 'react';

import './Home.css'

const Home = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: "เอกสาร 1", docu:"xxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 2, name: "เอกสาร 2", docu:"xxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 3, name: "เอกสาร 3", docu:"xxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 4, name: "เอกสาร 4", docu:"xxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 5, name: "เอกสาร 5", docu:"xxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 6, name: "เอกสาร 6", docu:"xxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" }
    ]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container">
            {/* Main Content */}
            <div className="main-content">
                <h1>ค้นหาเอกสารทั้งหมด</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="ค้นหาเอกสาร..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button>จัดเรียง</button>
                </div>
                
                {/* Filter Buttons */}
                <div className="filter-buttons">
                    <button className="filter-btn">เลือกหลายรายการ</button>
                    <button className="filter-btn">ดาวน์โหลด</button>
                </div>
                
                {/* Document Table */}
                <table>
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ชื่อเอกสาร</th>
                            <th>เอกสาร</th>
                            <th>วันที่ลง</th>
                            <th>ปีงบประมาณ</th>
                            <th>หน่วยงาน</th>
                            <th>เครื่องมือ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDocuments.map((doc, index) => (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.name}</td>
                                <td>{doc.docu}</td>
                                <td>{doc.date}</td>
                                <td>{doc.year}</td>
                                <td>{doc.category}</td>
                                <td>
                                    <button className="view-btn">ดู</button>
                                    <button className="download-btn">ดาวน์โหลด</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    <button>&laquo; ก่อนหน้า</button>
                    <button>ถัดไป &raquo;</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
