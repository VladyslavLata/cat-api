import { useState, useEffect} from "react";

export const useShowMobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // const HIDDEN_CLASS = "visibility-hidden";
  // const [targetReached, setTargetReached] = useState(false);
//   const findMainElement = () => {
//     const main = document.getElementById("main")!;
//     return main;
// }

//   const addHiddenToMainElement = () => {
//   findMainElement().classList.add("visibility-hidden");
// }


//     const removeHiddenToMainElement = () => {
//   findMainElement().classList.remove("visibility-hidden");
// } 


  useEffect(() =>
  {
console.log("qq");
    
 const updateTarget =(e: MediaQueryListEvent) =>
  {
   if (e.matches) {
     console.log("dd");
     
     console.log("ww");
    //  const main = document.getElementById("main")!;
    //  findMainElement().classList.remove(HIDDEN_CLASS);
     setShowContent(true);
     setShowMobileMenu(false);
   }
  //  else {
  //    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  //   }
    //  setTargetReached(true)
    // else setTargetReached(false)
  }
    const media = window.matchMedia(`(min-width: ${1440}px)`)
    media.addEventListener('change', updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) { updateTarget }

    return () => media.removeEventListener('change', updateTarget)
  }, [])
  //   const toggleMobileMenu = () => {

  //  const main = document.getElementById("main")!;

  //     setShowMobileMenu(!showMobileMenu);
  //     if (!showMobileMenu) {
  //       setTimeout(() => {
  //       main.classList.add("visibility-hidden");
  //       console.log("add");
  //       }, 300)
  //     } else  {
  //       main.classList.remove("visibility-hidden");
  //       console.log("remove");
  //     }
  //   }

  const onVisibleMobileMenu = () => {
    // const main = document.getElementById("main")!;

    if (!showMobileMenu) {
      setShowMobileMenu(true);

      setTimeout(() => {
        setShowContent(false);
        // findMainElement().classList.add(HIDDEN_CLASS);
        console.log("add");
      }, 300);
    }
  };

  const onHiddenMobileMenu = () => {
    // const main = document.getElementById("main")!;

    if (showMobileMenu) {
      setShowContent(true);
      setShowMobileMenu(false);

      // findMainElement().classList.remove(HIDDEN_CLASS);
      console.log("remove");
    }
  };

  return { onHiddenMobileMenu, onVisibleMobileMenu, showMobileMenu, showContent };
};
