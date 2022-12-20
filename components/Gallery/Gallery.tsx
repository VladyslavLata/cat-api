import { FC } from "react";
import { IChildren } from "../../types/types";

export const Gallery: FC<IChildren> = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
}