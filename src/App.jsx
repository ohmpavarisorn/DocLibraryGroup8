import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./Sidebar";
import Home from "./components/Home/Home";
import Administrator from "./components/Administrator/Administrator";
import Document from "./components/Document/Document";
import Permission from "./components/Permission/Permission";
import Reports from "./components/Reports/Reports";
import Help from "./components/Help/Help";
import Profile from "./components/Profile/Profile";
import Login from "./page/Login/Login";
import "./App.css";

function App() {
  const [token, setToken] = useState(""); // ใช้ string ว่างสำหรับ token เริ่มต้น
  const [role, setRole] = useState("");

  // ถ้าไม่มี token จะไปที่หน้า Login
  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />;
  }

  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administrator" element={<Administrator />} />
            <Route path="/document" element={<Document />} />
            <Route path="/permission" element={<Permission />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
