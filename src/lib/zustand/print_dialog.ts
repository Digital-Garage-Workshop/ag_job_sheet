import create from "zustand";

interface PrintDialogState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const usePrintDialog = create<PrintDialogState>()((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
