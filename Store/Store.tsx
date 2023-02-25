import create from "zustand";
import { useState, useEffect } from "react";
import { persist, createJSONStorage } from 'zustand/middleware';
import { StateStorage } from 'zustand/middleware';
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
  // _hasHydrated: boolean;
  // setHasHydrated: (state: any) => void;
}

export const useStore = create<IStore>()(persist((set) => ({
  selectsValue: defaultSelectsValue,
  showModal: false,
  //  _hasHydrated: false,
  //     setHasHydrated: (state) => {
  //       set({
  //         _hasHydrated: state
  //       });
  //     },
  lightTheme: true,
  toggleTheme: ()=> set((state)=> ({lightTheme: !state.lightTheme})),
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
    // onRehydrateStorage: () => (state) => {
    //   state.setHasHydrated(true)},
    name: 'catAPILightTheme', 
    // storage: createJSONStorage(() => localStorage), 
    partialize: (state) => ({ lightTheme: state.lightTheme }),
    onRehydrateStorage: (state) => {
      console.log('hydration starts')
    },
  }
));



