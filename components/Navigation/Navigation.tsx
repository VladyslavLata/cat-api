import { FC } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../Store/Store";
import { INavLink } from "../../types/types";
import { defaultSelectsValue } from "../../constants/selectDatas";
import * as SC from "./Navigation.styled";

interface IProps {
  navLinks: INavLink[];
}

export const Navigation: FC<IProps> = ({ navLinks }) => {
  const { pathname } = useRouter();
  const changeAllDefaulValueSelect = useStore((state) => state.changeAllSelectsValue)
  
  const onChangeDefaultValueSelect = (path: string) => {
    if (path === "/voting") {
      return
    } else
    if (path === "/breeds") {
      // changeAllDefaulValueSelect({...defaultSelectsValue});
    } else
    if (path === "/gallery") {
        // changeAllDefaulValueSelect({...defaultSelectsValue, order: "RANDOM"});
    }
  }

  return (
    <SC.List>
      {navLinks.map(({ path, bgColor, img, text }) => (
        <SC.Item key={path.pathname}>
          <SC.NavLink href={path} currentpath={pathname}
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
