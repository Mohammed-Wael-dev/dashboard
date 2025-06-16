import { Layout } from "./components/layout/layout";
import { MainDashboard } from "./pages/MainDashboard";

import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainDashboard />} />,
          <Route path="settings" element={<></>} />,
          <Route path="profile" element={<></>} />,
          <Route path="*" element={<></>} />,
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
