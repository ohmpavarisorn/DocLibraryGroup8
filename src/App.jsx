import "./App.css";

import { useState } from "react";
import { Layout } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import Header from './layout/Header/Header';
import Login from './page/Login/Login';
import Home from './page/Home/Home';
import Report from './page/Report/Report';
import Navbar from './layout/Navbar/Navbar';

import { HashRouter, Route, Routes, Link } from 'react-router-dom';

const {  Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <>
      <Layout>
        <Sider theme={darkTheme ? "dark" : "light"} className="sidebar">
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
      </Layout>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            </HashRouter>
    </>
  );
}
