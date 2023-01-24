import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Close from "../../public/close.svg";
import * as SC from "./Modal.styled";

interface IProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IProps> = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style["overflowY"] = "hidden";
    }
    return () => {
      document.body.style["overflowY"] = "unset";
    };
  }, [show]);

  useEffect(() => {
    const closeModalPressEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeModalPressEsc);
    return () => window.removeEventListener("keydown", closeModalPressEsc);
  }, [onClose]);

  const closeModalClickBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = show ? (
    <SC.Backdrop onClick={closeModalClickBackdrop}>
      <SC.ModalBox>
        <SC.ButtonCloseModal
          svg={Close}
          width={17}
          height={17}
          primary
          onClick={onClose}
        />
        {children}
      </SC.ModalBox>
    </SC.Backdrop>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("modal")!);
  } else {
    return null;
  }
};
