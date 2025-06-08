import { create } from "zustand";

interface AppState {
  currentSection: number;
  explore: boolean;
  intro: boolean;
  setSection: (index: number) => void;
  setExplore: (show: boolean) => void;
  setIntro: (play: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: 0,
  explore: false,
  intro: true,
  setSection: (index) => set({ currentSection: index }),
  setExplore: (show) => set({ explore: show }),
  setIntro: (play) => set({ intro: play }),
}));
