import { FC } from "react";
import { IChildren } from "../../types/types";
import { Box } from "../Box/Box";

export const BackButtonWrapp: FC<IChildren> = ({ children }) => {
  return <Box display="inline-flex" gridGap="10px">{children}</Box>;
}