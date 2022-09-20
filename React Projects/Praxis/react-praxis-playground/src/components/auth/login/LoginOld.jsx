// import { Link, useNavigate } from "react-router-dom";
// import { Button, Checkbox, Form, Input } from "antd";
// import "antd/dist/antd.min.css";
// import "./login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     localStorage.getItem("userName", "userCredentials");
//     navigate("/home");
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <section className="login-container">
//       <Form
//         name="basic"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         initialValues={{ remember: false }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//         className="login-wrapper"
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please input your password!" }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item wrapperCol={{ offset: 0, span: 32 }}>
//           <div className="login-button-wrapper">
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//             <Link to={"/register"}>Don't have an account?</Link>
//           </div>
//         </Form.Item>
//       </Form>
//     </section>
//   );
// };

// export default Login;
