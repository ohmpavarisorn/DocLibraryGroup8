import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { verifyUser } from "../../data/users";

function Login({ setToken, setRole, setUsername, setPassword }) {
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
      setToken(userInfo.token);
      setRole(userInfo.role);
      setUsername(username); // Set username in App
      setPassword(password); // Set password in App
    }
  };

  const handleGuestLogin = () => {
    setToken("guest_token");
    setRole("guest");
    setUsername("guest");
    setPassword(""); // Set empty password for guest
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <img src="" alt="" className="logo" />

          <h2>ยินดีต้อนรับ</h2>
          <form onSubmit={handleLogin}>
            <label className="login-form__label">ชื่อผู้ใช้*</label>
            <input
              type="text"
              placeholder="กรอกชื่อผู้ใช้"
              ref={usernameRef}
              required
              className="login-form__input"
            />
            <label className="login-form__label">รหัสผ่าน*</label>
            <input
              type="password"
              placeholder="กรอกรหัสผ่าน"
              ref={passwordRef}
              required
              className="login-form__input"
            />
            <button type="submit" className="login-button">
              เข้าสู่ระบบ
            </button>
          </form>
          <Link to="/forgot-password" className="forgot-password">
            ลืมรหัสผ่าน ?
          </Link>
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
