import { useState, useEffect } from "react";

export const useShowMobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const updateTarget = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setShowContent(true);
        setShowMobileMenu(false);
      }
    };
    const media = window.matchMedia(`(min-width: ${1440}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      updateTarget;
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  const onVisibleMobileMenu = () => {
    if (!showMobileMenu) {
      setShowMobileMenu(true);

      setTimeout(() => {
        setShowContent(false);
      }, 300);
    }
  };

  const onHiddenMobileMenu = () => {
    if (showMobileMenu) {
      setShowContent(true);
      setShowMobileMenu(false);
    }
  };

  return {
    onHiddenMobileMenu,
    onVisibleMobileMenu,
    showMobileMenu,
    showContent,
  };
};
