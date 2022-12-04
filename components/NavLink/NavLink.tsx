import { FC } from "react";

import * as SC from "./NavLink.styled";
import { IChildren } from "../../types/types";


export const NavLink: FC<IChildren> = ({ children }) => {
  return (
      <SC.WrapperText>
        {children}
      </SC.WrapperText>
  );
};
