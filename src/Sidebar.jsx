import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // import css สำหรับการปรับแต่งเพิ่มเติม

function Sidebar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar-container d-flex flex-column justify-content-between p-3 vh-100">
      {/* Logo Section */}
      <div className="logo-section mb-4">
        <Link
          to="/"
          className="text-decoration-none d-flex align-items-center mb-3"
        >
          <img
            src="/img/logo.gif"
            alt=""
            className="logo-image me-2"
            style={{
              width: "215px", // ปรับขนาดกว้าง
              height: "80px", // ปรับขนาดสูง
              borderRadius: "10px", // สามารถปรับเป็นวงกลมได้หากต้องการ
              padding: "10px",
              border: "5px solid white", // เพิ่มกรอบสีขวา
              backgroundColor: "white",
            }}
          />
          <span className="logo-text fs-5"></span>
        </Link>
        <hr className="divider" />
      </div>

      {/* Menu Section */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item p-1">
          <Link to="/" className="nav-link sidebar-item">
            <i className="bi bi-house me-2"></i>
            Home
          </Link>
        </li>
        <li className="nav-item p-1">
          <a
            href="#"
            className="nav-link sidebar-item"
            onClick={toggleDropdown}
          >
            <i className="bi bi-gear me-2"></i>
            Administrator
          </a>
          {isDropdownOpen && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item p-1">
                <Link to="/document" className="nav-link sidebar-item">
                  Document Management
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/permission" className="nav-link sidebar-item">
                  Permission Management
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/reports" className="nav-link sidebar-item">
                  Reports
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item p-1">
          <Link to="/help" className="nav-link sidebar-item">
            <i className="bi bi-question-circle me-2"></i>
            Help
          </Link>
        </li>
        <li className="nav-item p-1">
          <Link to="/profile" className="nav-link sidebar-item">
            <i className="bi bi-person me-2"></i>
            Profile
          </Link>
        </li>
      </ul>

      {/* Footer Section */}
      <div className="footer-section">
        <hr className="divider" />
        <i className="bi bi-person-circle me-2"></i>
        <span className="user-name">Yousafe</span>
      </div>
    </div>
  );
}

export default Sidebar;
