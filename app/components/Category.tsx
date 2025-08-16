import { TCategory } from "../menu/types";

interface Props extends TCategory {
  onClick: () => void;
  isSelected: boolean;
  fullView?: boolean;
}

const defaultThumbnail =
  "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4";

export function Category({
  name,
  onClick,
  thumbnail,
  isSelected,
  fullView,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`bg-[url(${
        thumbnail || defaultThumbnail
      })]  rounded-2xl shadow-xl ${fullView ? "min-w-48" : "min-w-24"} ${
        fullView ? "h-48" : "h-24"
      } aria-selected:w-28 aria-selected:h-28  hover:scale-125 transition-all cursor-pointer bg-cover`}
      aria-selected={isSelected}
    >
      <div className="flex justify-center items-center bg-black opacity-75 rounded-2xl w-full h-full text-white text-2xl text-center">
        {name}
      </div>
    </div>
  );
}
