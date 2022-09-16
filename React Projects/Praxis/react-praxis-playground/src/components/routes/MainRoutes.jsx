// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Home from "../contents/home/Home";
import PageContent2 from "../contents/PageContent2";
import PageContent4 from "../contents/PageContent4";
import PageContent3 from "../contents/PageContent3";
import Calculator from "../contents/calculator";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

const MainRoutes = () => (
  <Routes>
    <Route element={<PublicRoutes />}>
      <Route index path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to={"/login"} />} />
    </Route>
    <Route element={<ProtectedRoutes />}>
      <Route element={<PageLayout />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/content2" element={<PageContent2 />} />
        <Route path="/content3" element={<PageContent3 />} />
        <Route path="/content4" element={<PageContent4 />} />
      </Route>
    </Route>
  </Routes>
);

export default MainRoutes;
