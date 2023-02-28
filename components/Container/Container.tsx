import { FC, ReactNode } from "react";
import { useStore } from "../../Store/Store";
import * as SC from "./Container.styled";

interface IProps {
  className?: string,
  children: ReactNode,
}

export const Container: FC<IProps> = ({ className, children }) => {
  const { lightTheme } = useStore();

  return <SC.Container className={className} lightTheme={lightTheme}>{ children}</SC.Container>
}

