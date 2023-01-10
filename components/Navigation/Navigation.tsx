import { FC } from "react";
import { useRouter } from "next/router";
// import { UseStore } from "../../Store/Store";
import { INavLink } from "../../types/types";
import * as SC from "./Navigation.styled";

interface IProps {
  navLinks: INavLink[];
}

export const Navigation: FC<IProps> = ({ navLinks }) => {
  const { pathname } = useRouter();
  
  // const onChangeDefaultValueSelect = (path:string) => {
  //   const changeDefaulValueSelect = UseStore((state) => state.changeSelectsValue)
  //   if (path === "/breeds") {
  //     changeDefaulValueSelect("order", "ASC");
  //   }
  //   if (path === "/gallery") {
  //       changeDefaulValueSelect("order", "RANDOM");
  //   }
  // }

  return (
    <SC.List>
      {navLinks.map(({ path, bgColor, img, text }) => (
        <SC.Item key={path.pathname}>
          <SC.NavLink href={path} currentpath={pathname}
            // onClick={() => onChangeDefaultValueSelect(path.pathname)}
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
