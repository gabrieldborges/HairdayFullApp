import { BrowserRouter, Routes, Route } from "react-router";
import PageHome from "./pages/pageHome";
import PageLayout from "./pages/pageLayout";
import PageComponents from "./pages/pageComponents";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<PageHome />}></Route>
          <Route path="/components" element={<PageComponents />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
