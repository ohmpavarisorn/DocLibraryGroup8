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
import { verifyUser } from "./data/users"; // Import verifyUser function

import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null); // State for user data

  // Fetch user data when username and password are set
  useEffect(() => {
    if (username && password) {
      const user = verifyUser(username, password); // Verify user with username and password
      if (user) {
        setUserData(user); // Set user data after successful login
      } else {
        console.error("Invalid credentials");
      }
    }
  }, [username, password]);

  // If no token, redirect to Login
  if (!token) {
    return (
      <Login
        setToken={setToken}
        setRole={setRole}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    );
  }

  return (
    <BrowserRouter>
      <div className="d-flex">
        {/* Pass the user data to Sidebar */}
        <Sidebar user={userData} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administrator" element={<Administrator />} />
            <Route path="/document" element={<Document />} />
            <Route path="/permission" element={<Permission />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/help" element={<Help />} />
            {/* Pass username and password to Profile */}
            <Route
              path="/profile"
              element={<Profile username={username} password={password} />}
            />  
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
