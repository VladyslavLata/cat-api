import { useState } from "react"

export const useShowMobileMenu = () => {
 const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  } 

  return {toggleMobileMenu, showMobileMenu}
}