

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HtmlPage } from "./pages/HtmlPage";
import { CssPage } from "./pages/CssPage";
import { JsPage } from "./pages/JsPage";
import { SqlPage } from "./pages/SqlPage";
import { GitPage } from "./pages/GitPage";
import { ReactPage } from "./pages/ReactPage";
import { NodePage } from "./pages/NodePage";
import { DPage } from "./pages/DPage";
import { NotPage } from "./pages/NotPage";
import { Layout } from "./component/Layout";
import './App.css';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="HtmlPage" element={<HtmlPage />} />
          <Route path="CssPage" element={<CssPage />} />
          <Route path="JsPage" element={<JsPage />} />
          <Route path="SqlPage" element={<SqlPage />} />
          <Route path="GitPage" element={<GitPage />} />
          <Route path="ReactPage" element={<ReactPage />} />
          <Route path="NodePage" element={<NodePage />} />
          <Route path="DPage" element={<DPage />} />
          {/* <Route path="*" element={<NotPage />} /> */}
        </Route>
      </Routes>

    </>
  );
}

export default App;
