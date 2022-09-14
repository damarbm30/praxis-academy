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
      {/* <SubMenu
          key="sub1"
          title={
            <span>
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/calculator">Calculator</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/content2">Option 2</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/content3">Option 3</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/content4">Option 4</Link>
          </Menu.Item>
        </SubMenu> */}
    </Sider>
  );
};

export default Sidebar;
