import { useState } from "react"

export const useShowMobileMenu = () => {
 const [showMobileMenu, setShowMobileMenu] = useState(false);

  const main = document.getElementById("main")!;
  
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) {
      setTimeout(() => {
          main.classList.add("visibility-hidden");
      }, 300)
    } else {
      main.classList.remove("visibility-hidden");
    }
  } 

  return {toggleMobileMenu, showMobileMenu}
}