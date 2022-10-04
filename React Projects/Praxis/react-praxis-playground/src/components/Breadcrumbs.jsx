import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "80px 0 16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
