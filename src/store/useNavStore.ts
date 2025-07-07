import { create } from "zustand";
const currentPage = [
  {
    to: "/",
    id: "main-dashboard",
  },
  {
    to: "/nft-marketplace",
    id: "nft-marketplace",
  },
  {
    to: "/data-tables",
    id: "data-tables",
  },
  {
    to: "/profile",
    id: "profile",
  },
  {
    to: "/sign-in",
    id: "sign-in",
  },
];
interface StoreState {
  navigator: string;
  setNavigator: (navigator: string) => void;
}

export const useNavStore = create<StoreState>((set) => ({
  navigator:
    currentPage.find((item) => item.to === window.location.pathname)?.id ||
    "main-dashboard",
  setNavigator: (navigator: string) => set({ navigator }),
}));
