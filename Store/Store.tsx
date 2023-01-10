
import create from "zustand";
import { defaultSelectsValue } from "../constants/selectDatas";
import { ISelectsValue } from "../types/types";


interface IStore {
  selectsValue: ISelectsValue,
  changeSelectsValue: (nameSelect: string, valueSelect: string) => void,
}

 const UseStore = create<IStore>((set) => ({
  selectsValue: defaultSelectsValue,
  changeSelectsValue: (nameSelect, valueSelect) =>
    set((state) => ({ selectsValue: { ...state.selectsValue, [nameSelect]: valueSelect } })),
 }));

export default UseStore;
