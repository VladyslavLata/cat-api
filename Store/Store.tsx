import create from "zustand";
import { defaultSelectsValue } from "../constants/selectDatas";
import { ISelectsValue } from "../types/types";

interface IStore {
  selectsValue: ISelectsValue;
  showModal: boolean;
  lightThene: boolean;
  changeSelectsValue: (nameSelect: string, valueSelect: string) => void;
  changeAllSelectsValue: (selectsValue: ISelectsValue) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useStore = create<IStore>((set) => ({
  selectsValue: defaultSelectsValue,
  showModal: false,
  lightThene: true,
  openModal: () => set(() => ({ showModal: true })),
  closeModal: () => set(() => ({ showModal: false })),
  changeSelectsValue: (nameSelect, valueSelect) =>
    set((state) => ({
      selectsValue: { ...state.selectsValue, [nameSelect]: valueSelect },
    })),
  changeAllSelectsValue: (selectsValue) =>
    set(() => ({ selectsValue: { ...selectsValue } })),
}));
