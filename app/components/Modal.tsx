"use client";

import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-[999] fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-lg backdrop-brightness-75"
      onClick={onClose}
    >
      <div className="relative bg-white shadow-lg p-6 rounded-4xl max-w-[90%] max-h-[90%]">
        <button
          className="top-7 right-7 absolute text-black hover:text-yame text-xl cursor-pointer"
          onClick={onClose}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
