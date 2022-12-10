import { useMediaQuery } from "react-responsive";

export const useMyAppMedia = () => {
  const minMediaDesktop = useMediaQuery({ query: '(min-width: 1440px)'});
  const minMediaTab = useMediaQuery({query: '(min-width: 768px)'});
  const minMediaMobile = useMediaQuery({query:'(min-width: 375px)'});
  const maxMediaTab = useMediaQuery({query:'(max-width: 1439px)'});
  const maxMediaMobile = useMediaQuery({query:'(max-width: 767px)'});
  
  return {minMediaDesktop, minMediaTab, minMediaMobile, maxMediaTab, maxMediaMobile}
}