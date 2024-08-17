import {create} from 'zustand';

const useStore = create((set) => ({
  loopNumber: 1,
  clues: [],
  incrementLoop: () => set((state) => ({ loopNumber: state.loopNumber + 1 })),
  addClue: (clue) => set((state) => ({ clues: [...state.clues, clue] })),
  hasClue: (clue) => (state) => state.clues.includes(clue),
  resetProgress: () => set({ loopNumber: 1, clues: [] }),
}));

export default useStore;
