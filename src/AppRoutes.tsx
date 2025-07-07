import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { MainDashboard } from "./pages/MainDashboard";
import { NFTMarketplace } from "./pages/NFTMarketplace";
import { DataTables } from "./pages/DataTables";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainDashboard />} />
      <Route path="nft-marketplace" element={<NFTMarketplace />} />
      <Route path="data-tables" element={<DataTables />} />
      <Route path="profile" element={<Profile />} />
    </Route>
    <Route path="sign-in" element={<SignIn />} />
  </Routes>
);