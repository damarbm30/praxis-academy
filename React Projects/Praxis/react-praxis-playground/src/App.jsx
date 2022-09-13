import React from "react";
import "antd/dist/antd.min.css";
import { Breadcrumb, Layout } from "antd";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageContent2 from "./components/contents/PageContent2";
import PageContent4 from "./components/contents/PageContent4";
import PageContent3 from "./components/contents/PageContent3";
import Home from "./components/home/Home";
import Calculator from "./components/calculator";

const { Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Content
        style={{
          padding: "0px 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "80px 0 16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Layout
          className="site-layout-background"
          style={{
            padding: "24px 0",
          }}
        >
          <Sidebar />
          <Content
            style={{
              minHeight: 280,
              backgroundColor: "white",
              marginLeft: "1rem",
              height: "70vh",
              overflow: "scroll",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/content2" element={<PageContent2 />} />
              <Route path="/content3" element={<PageContent3 />} />
              <Route path="/content4" element={<PageContent4 />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Router>
);

export default App;
