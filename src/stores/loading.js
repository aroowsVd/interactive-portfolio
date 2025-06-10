import { create } from "zustand";

export const useLoaderStore = create((set) => ({
  isEntered: false,
  setIsEntered: () => set(() => ({ isEntered: true })),
}));