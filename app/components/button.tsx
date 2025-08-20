import { IconType } from "react-icons";

interface Props {
  title?: string;
  Icon: IconType;
}

export function Button({ Icon, title }: Props) {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer hover"
      title={title}
    >
      <button className="flex justify-center items-center bg-white shadow-2xl border-2 border-yame rounded-full w-24 h-24 cursor-pointer">
        <Icon className="text-yame text-6xl text-center" />
      </button>
    </div>
  );
}
