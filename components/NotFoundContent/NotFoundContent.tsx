import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import ImageNotFound from "../../public/404-error.webp"; 
import ReloadIcon from "../../public/update.svg";
import * as SC from "./NotFoundContent.styled";


export const NotFoundContent: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const avtoReload = setTimeout(() => {
    router.replace('/');
    }, 7000);
    
    return () =>  clearTimeout(avtoReload) ;

  },[router]);

  const reload = () => {
    router.reload();
  }

  return (
    <SC.ContainerNotFound>
      <SC.ImgWrapp>
        <SC.Img src={ImageNotFound} alt="Image Page not found" />
      </SC.ImgWrapp>
      <SC.ReloadMessage>Try reloading the page</SC.ReloadMessage>
      <SC.BtnReload svg={ReloadIcon} width={20} height={20} onClick={reload}></SC.BtnReload>
    </SC.ContainerNotFound>
)
}