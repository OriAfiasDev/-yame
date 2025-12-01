"use client";

import { useLanguage } from "../LanguageContext";
import { TDish } from "../menu/types";

interface Props extends TDish {
  onClick: (dish: TDish) => void;
}

export const Dish = ({ onClick, ...dish }: Props) => {
  const { language, isRtl } = useLanguage();
  const { thumbnail, recommended, name, description, vegan, price, spicy } =
    dish;

  const image =
    thumbnail ??
    "https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/nodish.jpg";

  return (
    <button
      className="relative flex justify-between items-start gap-6 bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] p-3 rounded-3xl w-full"
      onClick={() => onClick(dish)}
    >
      {recommended && (
        <span className="right-[-2px] absolute bg-yame p-1 rounded-md w-[60px] text-[white] text-sm text-center rotate-[30deg]">
          מומלץ!
        </span>
      )}
      <img
        className="my-auto rounded-2xl w-[100px] lg:w-[200px] h-full max-h-[120px] object-cover hover:scale-150 transition-transform hover:translate-x-[-17%] duration-[0.2s]"
        src={image}
        alt={name[language]}
      />
      <div
        className={`w-full overflow-hidden text-yame whitespace-nowrap ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        <h2 className="font-karantina font-semibold text-3xl align-top tracking-wider">
          {name[language]}
        </h2>
        <pre
          className="overflow-hidden font-open-sans font-normal text-black lg:text-md text-ellipsis"
          title={description[language]}
        >
          {description[language]}
        </pre>
        <div className="flex items-center gap-2 mt-2 font-karantina tracking-widest">
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
    </button>
  );
};
