import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

const PageLayout = () => {
  const { Content } = Layout;

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Navbar />
        <Content style={{ padding: "0px 50px" }}>
          <Breadcrumbs />
          <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
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
        <Footer />
      </Layout>
    </>
  );
};

export default PageLayout;
