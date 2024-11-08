import React from "react";
import {
  AppstoreOutlined,
  QuestionCircleOutlined,
  HomeOutlined,
  UserOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Administrator
      </Menu.Item>
      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task1">Task 1</Menu.Item>
        <Menu.Item key="task2">Task 2</Menu.Item>
        <Menu.SubMenu key="subtask" title="Subtask">
          <Menu.Item key="subtask1">Subtask 1</Menu.Item>
          <Menu.Item key="subtask2">Subtask 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="help" icon={<QuestionCircleOutlined />}>
        Help
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
