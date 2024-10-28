import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberPassword });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="" className="logo" />
        <h2>ยินดีต้อนรับ</h2>
        <form onSubmit={handleLogin}>
          <label>ชื่อผู้ใช้*</label>
          <input
            type="text"
            placeholder="กรอกชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>รหัสผ่าน*</label>
          <input
            type="password"
            placeholder="กรอกรหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-password">
            <input
              type="checkbox"
              checked={rememberPassword}
              onChange={() => setRememberPassword(!rememberPassword)}
            />
            <label>จดจำรหัสผ่าน</label>
          </div>
          <button type="submit" className="login-button">
            เข้าสู่ระบบ
          </button>
          <a href="#" className="forgot-password">
            ลืมรหัสผ่าน ?
          </a>
          <div className="divider">หรือ</div>
          <a href="#" className="guest-login">
            เข้าสู่ระบบโดยไม่ต้องลงชื่อเข้าใช้
          </a>
        </form>
      </div>
      <div className="login-bg"></div>
    </div>
  );
}

export default Login;
