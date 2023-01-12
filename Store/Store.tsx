import create from "zustand";
import { defaultSelectsValue } from "../constants/selectDatas";
import { ISelectsValue } from "../types/types";

interface IStore {
  selectsValue: ISelectsValue;
  changeSelectsValue: (nameSelect: string, valueSelect: string) => void;
  changeAllSelectsValue: (selectsValue: ISelectsValue) => void;
}

export const useStore = create<IStore>((set) => ({
  selectsValue: defaultSelectsValue,
  changeSelectsValue: (nameSelect, valueSelect) =>
    set((state) => ({
      selectsValue: { ...state.selectsValue, [nameSelect]: valueSelect },
    })),
  changeAllSelectsValue: (selectsValue) =>
    set(() => ({ selectsValue: { ...selectsValue } })),
}));
