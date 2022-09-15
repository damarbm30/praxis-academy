import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "side1",
    label: "Navigation one",
    children: [
      { label: <Link to="/">Home</Link>, key: "home" },
      { label: <Link to="/calculator">Calculator</Link>, key: "calculator" },
    ],
  },
  { key: "side2", label: "Navigation two", children: ["Option one"] },
];

const Sidebar = () => {
  const { Sider } = Layout;

  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultOpenKeys={["side1"]}
        defaultSelectedKeys={["home"]}
        style={{
          height: "100%",
        }}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
