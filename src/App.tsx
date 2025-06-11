import { Layout } from "./components/layout/layout";

import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          children={[
            <Route index element={<></>} />,
            <Route path="settings" element={<></>} />,
            <Route path="profile" element={<></>} />,
            <Route path="*" element={<></>} />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
