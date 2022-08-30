import React from "react";
import "antd/dist/antd.min.css";
import { Breadcrumb, Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContent1 from "./contents/PageContent1";
import PageContent2 from "./contents/PageContent2";
import PageContent4 from "./contents/PageContent4";
import PageContent3 from "./contents/PageContent3";

const { Content, Footer } = Layout;

const Navigation = () => (
  <Router>
    <Layout>
      <Navbar />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
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
              padding: "0 24px",
              minHeight: 280,
              backgroundColor: "white",
              marginLeft: "1rem",
              paddingTop: "1rem",
            }}
          >
            {/* <PageContent1 />
          <PageContent2 /> */}
            <Routes>
              <Route path="/content1" element={<PageContent1 />} />
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

export default Navigation;
