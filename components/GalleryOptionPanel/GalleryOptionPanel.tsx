import { FC } from "react";
import { Select } from "../Select/Select";
import { SelectWithDynamicParams } from "../SelectWithDynamicParams/SelectWithDynamicParams";
import { ICateory } from "../../types/types";
import { dataSelects } from "../../constants/selectDatas";

interface IProps {
  categories: ICateory[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const GalleryOptionPanel: FC<IProps> = ({ categories, onChange }) => {
  return (
    <div>
      <ul>
        <li>
          <SelectWithDynamicParams
            optionValueDefault={"allCategories"}
            optionDefault={"None"}
            primary
            label={"categories"}
            datas={categories}
            name={"category_ids"}
            onChange={onChange}
          />
        </li>
        {dataSelects.map(({ name, label, dataOptions }) => (
          <li key={name}>
            <Select selectDatas={dataOptions} name={name} label={label} primary onChange={onChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};
