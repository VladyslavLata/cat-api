import { FC } from "react";
import { Select } from "../Select/Select";
import { SelectBreeds } from "../SelectBreeds/SelectBreeds";
import { IBreeds } from "../../types/types";

interface IProps {
  breeds: IBreeds[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const GalleryOptionPanel: FC<IProps> = ({ breeds, onChange }) => {
  return (
    <div>
      <ul>
        <li>
          <SelectBreeds
            optionValueDefault={"allBreeds"}
            optionDefault={"None"}
            primary
            label={"breed"}
            breeds={breeds}
            name={"breed_ids"}
            onChange={onChange}
          />
        </li>
      </ul>
    </div>
  );
};
