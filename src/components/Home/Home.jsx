import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: "เอกสาร 1", docu: "xxxxxxxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 2, name: "เอกสาร 2", docu: "xxxxxxxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 3, name: "เอกสาร 3", docu: "xxxxxxxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 4, name: "เอกสาร 4", docu: "xxxxxxxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 5, name: "เอกสาร 5", docu: "xxxxxxxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" },
        { id: 6, name: "เอกสาร 6", docu: "xxxxxxxxxx", date: "วว-ดด-ปป", year: 2565, category: "หมวดหมู่ xxx" }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);  // ใช้ ref เก็บการอ้างอิงถึง dropdown

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
        console.log("Dropdown visibility:", !isDropdownVisible); // เพิ่มบรรทัดนี้เพื่อตรวจสอบ
    };


    // ใช้ useEffect เพื่อจัดการเหตุการณ์การคลิกนอก dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filteredDocuments = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container">
            <div className="main-content">
                <h1>ค้นหาเอกสารทั้งหมด</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="ค้นหาเอกสาร..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className='sort' onClick={toggleDropdown}>
                        จัดเรียง <span><i className="bi bi-caret-down-fill" style={{ color: "#e66309" }}></i></span>
                    </button>
                </div>

                {isDropdownVisible && (
                    <div className="filter-dropdown" ref={dropdownRef}>
                        <div className="filter-row">
                            <div className="filter-item">
                                <label>เลขเอกสาร</label>
                                <input type="text" placeholder="ใส่เลขเอกสาร" />
                            </div>
                            <div className="filter-item">
                                <label>ชื่อเอกสาร</label>
                                <input type="text" placeholder="ใส่ชื่อเอกสาร" />
                            </div>
                            <div className="filter-item">
                                <label>วันที่</label>
                                <input type="date" />
                            </div>
                            <div className='filter-item'>
                            <label>ประเภทเอกสาร</label>
                            <select>
                                <option value="">เลือก</option>
                                <option value="ประเภท 1">หนังสือประชาสัมพันธ์</option>
                                <option value="ประเภท 2">รายงานการประชุม</option>
                                <option value="ประเภท 3">รายงานประจำปี</option>
                                <option value="ประเภท 4">หนังสือรับรอง</option>
                                <option value="ประเภท 5">หนังสือสั่งการข้อบังคับ</option>
                            </select>
                            </div>
                        </div>
                        <div className="filter-row">
                            <div className="filter-item">
                                <label>ปีงบประมาณ</label>
                                <select>
                                    <option value="">เลือก</option>
                                    <option value="2565">2565</option>
                                    <option value="2566">2566</option>
                                    <option value="2567">2567</option>
                                </select>
                            </div>
                            <div className="filter-item">
                                <label>หน่วยงาน</label>
                                <select>
                                    <option value="">เลือก</option>
                                    <option value="หน่วยงาน 1">สำนักงานรัฐมนตรี</option>
                                    <option value="หน่วยงาน 2">สำนักงานปลัดกระทรวงพลังงาน</option>
                                    <option value="หน่วยงาน 3">กรมเชื้อเพลิงธรรมชาติ</option>
                                    <option value="หน่วยงาน 4">กรมพัฒนาพลังงานทดแทน</option>
                                    <option value="หน่วยงาน 5">สำนักงานนโยบายและแผนงาน</option>
                                </select>
                            </div>
                            <div className="filter-item">
                                <label>คำเกี่ยวข้อง</label>
                                <input type="text" placeholder="ใส่คำเกี่ยวข้อง" />
                            </div>
                        </div>
                        <div className="filter-buttons">
                            <button className="search-button" onClick={() => console.log("ค้นหา")}>ค้นหา</button>
                            <button className="reset-button" onClick={() => console.log("ล้างข้อมูล")}>ล้างข้อมูล</button>
                        </div>
                    </div>
                )}

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
                                    <button className="view-btn"><i className="bi bi-eye" style={{ color: "#e66309" }}></i></button>
                                    <button className="download-btn"><i className="bi bi-download"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <button>&laquo; ก่อนหน้า</button>
                    <button>ถัดไป &raquo;</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
