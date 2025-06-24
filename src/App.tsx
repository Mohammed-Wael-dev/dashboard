import { Layout } from "./components/layout/Layout";
import { MainDashboard } from "./pages/MainDashboard";
import { NFTMarketplace } from "./pages/NFTMarketplace";
import { DataTables } from "./pages/DataTables";
import { BrowserRouter, Route, Routes } from "react-router";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { RTLAdmin } from "./pages/RTLAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainDashboard />} />,
          <Route path="nft-marketplace" element={<NFTMarketplace />} />,
          <Route path="data-tables" element={<DataTables />} />,
          <Route path="profile" element={<Profile />} />,
        </Route>
        <Route path="rtl-admin" element={<RTLAdmin />} />,
        <Route path="sign-in" element={<SignIn />} />,
      </Routes>
    </BrowserRouter>
  );
}

export default App;
