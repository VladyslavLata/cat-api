import { FC } from "react";
import { Text } from "../Text/Text";
import { IChildren } from "../../types/types";
import * as SC from "./Message.styled";

export const Message: FC<IChildren> = ({children}) => {
  return (
    <SC.MessageWrapp>
      <Text fs="sm" color="textSecondary">{children}</Text>
    </SC.MessageWrapp>
  )
} 