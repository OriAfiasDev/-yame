"use client";

import { useLanguage } from "../LanguageContext";
import { TDish } from "../menu/types";
import Modal, { ModalProps } from "./Modal";

interface Props extends ModalProps {
  dish?: TDish;
}

export function DishModal({ dish, isOpen, onClose }: Props) {
  const { language } = useLanguage();
  if (!dish) return;

  const { thumbnail, name, description, vegan, price, spicy } = dish;

  const image =
    thumbnail ??
    "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/nodish.jpg";

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnBackdropClick>
      <div className="flex flex-col items-center text-center">
        <div className="w-full overflow-hidden text-yame text-right whitespace-nowrap">
          <h2 className="mb-2 font-karantina font-semibold text-3xl text-center align-top tracking-wider">
            {name[language]}
          </h2>
          <img
            className="my-auto mb-2 rounded-2xl w-full h-full max-h-[480px] object-cover"
            src={image}
            alt={name[language]}
          />
          <pre
            className="font-open-sans font-normal text-black text-lg text-center whitespace-break-spaces"
            title={description[language]}
          >
            {description[language]}
          </pre>
          <div className="flex flex-row-reverse justify-start items-center gap-2 mt-2 font-karantina tracking-widest">
            <div className="text-yame text-3xl">{price} ₪</div>
            {vegan && (
              <img
                src="https://media.istockphoto.com/id/1297289529/vector/leaf-icon-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=dFtiy2BLo20FR5OeJg932L1BW4UNXhC-f-zew5vfLz0="
                height={32}
                width={32}
                title="צמחוני"
              />
            )}
            {spicy && (
              <img
                src="https://thumbs.dreamstime.com/b/extra-spicy-food-pepper-vector-icon-101419966.jpg"
                height={32}
                width={32}
                title="חריף"
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
