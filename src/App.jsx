// App.js
import "./App.css";
import { useState } from "react";
import { Layout } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import Home from "./page/Home/Home";

const { Header, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout>
      <Sider
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
        width={250} /* กำหนดความกว้างของ Sider เป็น 350px */
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <div className="toggle-theme-button">
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </div>
      </Sider>
      <Home />
    </Layout>
  );
}

export default App;
