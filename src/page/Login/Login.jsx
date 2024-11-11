import React, { useRef } from "react";
import "./Login.css";
import { verifyUser } from "../../data/users"; // import function จาก users.js

function Login({ setToken, setRole }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    // Reset input fields
    usernameRef.current.value = "";
    passwordRef.current.value = "";

    // Verify user credentials
    const userInfo = verifyUser(username, password);
    if (userInfo === null) {
      alert("ชื่อผู้ใช้หรือรหัสผ่านผิด");
      usernameRef.current.focus();
    } else {
      setToken(userInfo.token); // Set token
      setRole(userInfo.role); // Set role
    }
  };

  const handleGuestLogin = () => {
    setToken("guest_token"); // Set a default token for guest
    setRole("guest"); // Set role as guest
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          {/* โลโก้ */}
          <img src="" alt="" className="logo" />
          
          <h2>ยินดีต้อนรับ</h2>
          <form onSubmit={handleLogin}>
            <label>ชื่อผู้ใช้*</label>
            <input
              type="text"
              placeholder="กรอกชื่อผู้ใช้"
              ref={usernameRef}
              required
            />
            <label>รหัสผ่าน*</label>
            <input
              type="password"
              placeholder="กรอกรหัสผ่าน"
              ref={passwordRef}
              required
            />
            <button type="submit" className="login-button">
              เข้าสู่ระบบ
            </button>
          </form>
          <a href="#" className="forgot-password">
            ลืมรหัสผ่าน ?
          </a>
          <div className="or">หรือ</div>
          <button onClick={handleGuestLogin} className="guest-login">
            เข้าสู่ระบบโดยไม่ต้องลงชื่อเข้าใช้
          </button>
        </div>
        <div className="login-bg"></div>
      </div>
    </div>
  );
}

export default Login;
