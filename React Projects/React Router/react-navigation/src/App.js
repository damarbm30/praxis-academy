import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContent1 from "./components/contents/PageContent1";
import PageContent2 from "./components/contents/PageContent2";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          {/* <Route path="/content1" element={<PageContent1 />} />
          <Route path="/content2" element={<PageContent2 />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
