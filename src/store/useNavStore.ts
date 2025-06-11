import { create } from "zustand";
const curruntPage = [
  {
    to: "/",
    label: "Main Dashboard",
  },
  {
    to: "/nft-marketplace",
    label: "NFT Marketplace",
  },
  {
    to: "/Data-tables",
    label: "Data Tables",
  },
  {
    to: "/profile",
    label: "Profile",
  },
  {
    to: "/sign-in",
    label: "Sign In",
  },
  {
    to: "/rtl",
    label: "RTL Admin",
  },
];
interface StoreState {
  navigator: string;
  setNavigator: (navigator: string) => void;
}

export const useNavStore = create<StoreState>((set) => ({
  navigator:
    curruntPage.find((item) => item.to === window.location.pathname)?.label ||
    "Main Dashboard",
  setNavigator: (navigator: string) => set({ navigator }),
}));
