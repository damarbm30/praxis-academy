import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Home from "./components/contents/home/Home";
import PageContent2 from "./components/contents/PageContent2";
import PageContent4 from "./components/contents/PageContent4";
import PageContent3 from "./components/contents/PageContent3";
import Calculator from "./components/contents/calculator";

const App = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/content2" element={<PageContent2 />} />
      <Route path="/content3" element={<PageContent3 />} />
      <Route path="/content4" element={<PageContent4 />} />
    </Route>
  </Routes>
);

export default App;
