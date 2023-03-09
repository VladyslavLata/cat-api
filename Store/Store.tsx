import create from "zustand";
import { persist } from "zustand/middleware";
import { defaultSelectsValue } from "../constants/selectDatas";
import { ISelectsValue } from "../types/types";

interface IStore {
  selectsValue: ISelectsValue;
  showModal: boolean;
  lightTheme: boolean;
  changeSelectsValue: (nameSelect: string, valueSelect: string) => void;
  changeAllSelectsValue: (selectsValue: ISelectsValue) => void;
  openModal: () => void;
  closeModal: () => void;
  toggleTheme: () => void;
}

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      selectsValue: defaultSelectsValue,
      showModal: false,
      lightTheme: true,
      toggleTheme: () => set((state) => ({ lightTheme: !state.lightTheme })),
      openModal: () => set(() => ({ showModal: true })),
      closeModal: () => set(() => ({ showModal: false })),
      changeSelectsValue: (nameSelect, valueSelect) =>
        set((state) => ({
          selectsValue: { ...state.selectsValue, [nameSelect]: valueSelect },
        })),
      changeAllSelectsValue: (selectsValue) =>
        set(() => ({ selectsValue: { ...selectsValue } })),
    }),
    {
      name: "catAPILightTheme",
      partialize: (state) => ({ lightTheme: state.lightTheme }),
    }
  )
);
