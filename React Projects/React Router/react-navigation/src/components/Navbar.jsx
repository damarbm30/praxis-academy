import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";

const Navbar = () => {
  const { Header } = Layout;
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items1} />
    </Header>
  );
};

export default Navbar;
