import { create } from "zustand";

interface AuthStoreType {
  userEmail: string;
  userName: string;
  setUserEmail: (email: string) => void;
  setUserName: (name: string) => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  userEmail: "",
  userName: "",
  setUserEmail: (email: string) => set({ userEmail: email }),
  setUserName: (name: string) => set({ userName: name }),
}));
