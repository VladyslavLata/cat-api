import { useMediaQuery } from "usehooks-ts";

export const useMyAppMedia = () => {
  const minMediaDesktop = useMediaQuery('(min-width: 1440px)');
  const minMediaTab = useMediaQuery('(min-width: 768px)');
  const minMediaMobile = useMediaQuery('(min-width: 375px)');
  const maxMediaTab = useMediaQuery('(max-width: 1439px)');
  const maxMediaMobile = useMediaQuery('(max-width: 767px)');
  
  return {minMediaDesktop, minMediaTab, minMediaMobile, maxMediaTab, maxMediaMobile}
}