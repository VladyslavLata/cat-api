import { useState } from "react";

export const useShowMobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  const visibleMobileMenu = () => {
    const main = document.getElementById("main")!;

    setShowMobileMenu(!showMobileMenu);

    setTimeout(() => {
      main.classList.add("visibility-hidden");
      console.log("add");
    }, 300);
    // } else  {
    //   main.classList.remove("visibility-hidden");
    //   console.log("remove");
    // }
  };

  const hiddenMobileMenu = () => {
    const main = document.getElementById("main")!;

    setShowMobileMenu(!showMobileMenu);

    main.classList.remove("visibility-hidden");
    console.log("remove");
  };

  return { hiddenMobileMenu, visibleMobileMenu , showMobileMenu };
};
