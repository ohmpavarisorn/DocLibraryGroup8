// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Administrator from "./components/Administrator/Administrator";
import Document from "./components/Document/Document";
import Permission from "./components/Permission/Permission";
import Reports from "./components/Reports/Reports";
import Help from "./components/Help/Help";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
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
