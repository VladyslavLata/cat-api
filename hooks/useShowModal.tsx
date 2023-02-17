import { useState} from "react";

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const onVisibleModal = () => {
    if (!showModal) {
      setShowModal(true);
      setTimeout(() => {
        setShowContent(false);
        console.log("g add");
      }, 300);
    }
  };

  const onHiddenModal = () => {
    if (showModal) {
      setShowContent(true);
      setShowModal(false);
      console.log("remove");
    }
  };

  return { onVisibleModal, onHiddenModal, showModal, showContent };
};
