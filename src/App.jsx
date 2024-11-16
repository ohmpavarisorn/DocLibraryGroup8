import { useState, useEffect } from "react";
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
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import MyDocument from "./components/MyDocument/MyDocument"; // Import MyDocument component
import { verifyUser } from "./data/users";

import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username && password) {
      const user = verifyUser(username, password);
      if (user) {
        setUserData(user);
      } else {
        console.error("Invalid credentials");
      }
    }
  }, [username, password]);

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="*"
            element={
              <Login
                setToken={setToken}
                setRole={setRole}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar user={userData} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administrator" element={<Administrator />} />
            <Route path="/my-document" element={<MyDocument />} />
            <Route path="/document" element={<Document />} />
            <Route path="/permission" element={<Permission />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile username={username} password={password} />} />
            {/* Add MyDocument route */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
