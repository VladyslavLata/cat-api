import { FC } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../Store/Store";
import { INavLink } from "../../types/types";
import * as SC from "./Navigation.styled";

interface IProps {
  navLinks: INavLink[];
  linkVisible: boolean;
  className?: string;
}

export const Navigation: FC<IProps> = ({ navLinks, linkVisible = true, className }) => {
  const { pathname } = useRouter();
  const {lightTheme} = useStore()
  
  const onChangeDefaultValueSelect = (path: string) => {
    if (path === "/voting") {
      return
    } else
    if (path === "/breeds") {
    } else
    if (path === "/gallery") {
    }
  }

  return (
    <SC.List className={className}>
      {navLinks.map(({ path, bgColor, img, text }) => (
        <SC.Item key={path.pathname}>
          <SC.NavLink href={path} linkvisible={linkVisible.toString() } currentpath={pathname}
            onClick={() => onChangeDefaultValueSelect(path.pathname)}
          >
            <SC.Wrapp bgColor={bgColor} img={img} currentpath={pathname} path={path}>
              <SC.LinkTitle
                fs={"s"}
                fw={"medium"}
                lh={"heading"}
                currentpath={pathname}
                path={path}
                lightTheme={lightTheme}
              >
                {text}
              </SC.LinkTitle>
            </SC.Wrapp>
          </SC.NavLink>
        </SC.Item>
      ))}
    </SC.List>
  );
};
