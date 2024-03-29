import React, { FC } from "react";
import { useStore } from "../../Store/Store";
import { Select } from "../Select/Select";
import { SelectWithDynamicParams } from "../SelectWithDynamicParams/SelectWithDynamicParams";
import { ICateory } from "../../types/types";
import { dataSelects } from "../../constants/selectDatas";
import Update from "../../public/update.svg";
import * as SC from "./GalleryOptionPanel.styled";

interface IProps {
  categories: ICateory[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickBtn: () => void;
}

export const GalleryOptionPanel: FC<IProps> = ({ categories, onChange, onClickBtn }) => {
  const {lightTheme } = useStore();
  return (
    <SC.OptionBox lightTheme={lightTheme}>
      <SC.SelectsList>
        <SC.SelectItem>
          <SelectWithDynamicParams
            optionValueDefault={"allCategories"}
            optionDefault={"None"}
            primary
            label={"categories"}
            datas={categories}
            name={"category_ids"}
            onChange={onChange}
          />
        </SC.SelectItem>
        {dataSelects.map(({ name, label, dataOptions }) => (
          <SC.SelectItem key={name}>
            <Select
              selectDatas={dataOptions}
              name={name}
              label={label}
              primary
              onChange={onChange}
            />
          </SC.SelectItem>
        ))}
      </SC.SelectsList>
      <SC.UpdateBtn
        svg={Update}
        primary
        width={20}
        height={20}
        lightTheme={lightTheme}
        onClick={onClickBtn}
      />
    </SC.OptionBox> 
  );
};
