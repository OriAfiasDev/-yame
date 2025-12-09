"use client";

import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  closeOnBackdropClick?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  closeOnBackdropClick,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-[999] fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-lg backdrop-brightness-75"
      onClick={() => closeOnBackdropClick && onClose()}
    >
      <div className="relative bg-white shadow-2xl backdrop-blur-md p-6 border border-white/10 rounded-3xl max-w-[90%] max-h-[90%] w-[min(90%,900px)]">
        <button
          className="top-4 right-4 absolute text-black text-xl cursor-pointer"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <div className="w-full max-h-[70vh] sm:max-h-[80vh] overflow-y-auto pr-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
