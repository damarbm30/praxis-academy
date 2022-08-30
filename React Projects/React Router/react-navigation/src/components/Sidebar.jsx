import React from "react";
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
        }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/content1">Option 1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/content2">Option 2</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/content3">Option 3</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/content4">Option 4</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
