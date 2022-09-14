import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PageFooter from "./PageFooter";

const PageLayout = () => {
  const { Content } = Layout;

  return (
    <>
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
              <Outlet />
            </Content>
          </Layout>
        </Content>
        <PageFooter />
      </Layout>
    </>
  );
};

export default PageLayout;
