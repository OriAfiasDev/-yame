"use client";

import Modal from "@/app/components/Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {title && (
        <h3 className="font-karantina font-semibold text-yame text-4xl text-right tracking-wider">
          {title}
        </h3>
      )}
      <p className="mb-4 text-black">{message}</p>
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="bg-gray-200/30 hover:brightness-95 px-4 py-2 rounded-md text-gray-800"
        >
          ביטול
        </button>
        <button
          onClick={onConfirm}
          className="bg-gradient-to-r from-red-600 to-red-500 shadow-md px-4 py-2 rounded-md text-white"
        >
          מחק
        </button>
      </div>
    </Modal>
  );
}
