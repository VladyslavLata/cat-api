import { FC } from "react";
import { useStore } from "../../Store/Store";
import { Text } from "../Text/Text";
import { IChildren } from "../../types/types";
import * as SC from "./Message.styled";

export const Message: FC<IChildren> = ({ children }) => {
  const {lightTheme} = useStore();
  return (
    <SC.MessageWrapp lightTheme={lightTheme}>
      <Text fs="sm" color="textSecondary">{children}</Text>
    </SC.MessageWrapp>
  )
} 