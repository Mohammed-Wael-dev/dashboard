import { Layout } from "./components/layout";

import { BrowserRouter, Route, Routes } from "react-router";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          children={[
            <Route index element={<div>Main Dashboard</div>} />,
            <Route path="settings" element={<div>Main Dashboard</div>} />,
            <Route path="profile" element={<div>Main Dashboard</div>} />,
            <Route path="*" element={<div>Main Dashboard</div>} />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
