import { FC } from "react";
import { useRouter } from "next/router";
import { INavLink } from "../../types/types";
import * as SC from "./Navigation.styled";

interface IProps {
  navLinks: INavLink[];
  linkVisible: boolean;
}

export const Navigation: FC<IProps> = ({ navLinks, linkVisible = true }) => {
  const { pathname } = useRouter();
  
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
    <SC.List>
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
