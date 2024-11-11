import './Permission.css';
import React, { useState } from 'react';

function Permission() {
    const [inputValue, setInputValue] = useState('');  // สร้าง state สำหรับเก็บค่าของ input

    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // อัพเดทค่าของ input เมื่อผู้ใช้พิมพ์
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted value:', inputValue);
        // สามารถทำงานอื่นๆ เช่น ส่งค่าที่กรอกไปยัง API หรือเพิ่มลงในรายการได้
    }

    return (
        <div>
            <h3>การจัดการสิทธิ์ในการเข้าถึง</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}       // ตั้งค่า value ของ input ให้เป็นค่าใน state
                    onChange={handleInputChange}  // เรียกใช้ฟังก์ชัน handleInputChange เมื่อมีการพิมพ์
                    placeholder='กรอกรหัสบุคลากร หรือ ชื่อบุคลากร'
                />
                <button type="submit">+</button>
            </form>
        </div>
    );
}

export default Permission;
