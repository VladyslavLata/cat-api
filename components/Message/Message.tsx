import { FC } from "react";
import { useStore } from "../../Store/Store";
import { Text } from "../Text/Text";
import * as SC from "./Message.styled";

interface IProps {
  className?: string,
  children: React.ReactNode,
}

export const Message: FC<IProps> = ({ children, className }) => {
  const {lightTheme} = useStore();
  return (
    <SC.MessageWrapp className={className} lightTheme={lightTheme}>
      <Text fs="sm" color="textSecondary">{children}</Text>
    </SC.MessageWrapp>
  )
} 