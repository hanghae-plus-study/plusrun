import { create } from "zustand";

interface AuthStoreType {
  userEmail: string;
  setUserEmail: (email: string | undefined) => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  userEmail: "",

  setUserEmail: (email: string | undefined) => set({ userEmail: email }),
}));
