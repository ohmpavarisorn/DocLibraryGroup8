import "./PermissionManage.css";
import React, { useState } from "react";

function PermissionManage() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>จัดการสิทธิ์ในการเข้าถึง</h1>
      <form>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="กรอกรหัสบุคลากร หรือ ชื่อบุคลากร"
        />
        <button type="submit" onClick={handleButtonClick}>+</button>
      </form>
    </div>
  );
}

export default PermissionManage;
