import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="z-[999] fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-lg"
      onClick={onClose}
    >
      <div className="relative bg-white shadow-lg p-6 rounded-4xl max-w-[90%] h-[90%]">
        <button
          className="top-12 right-12 absolute text-white hover:text-yame text-xl cursor-pointer"
          onClick={onClose}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};
