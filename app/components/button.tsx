interface Props {
  children: React.ReactNode;
  title?: string;
}

export function Button({ children, title }: Props) {
  return (
    <button
      title={title}
      className="group relative flex justify-center items-center bg-transparent p-5 border-0 w-[170px] h-auto overflow-hidden font-normal text-yame text-xl transition-all duration-100 cursor-pointer"
    >
      <span className="left-0 absolute border-y border-yame border-l w-5 group-hover:w-full h-full transition-all duration-500"></span>

      <p className="absolute group-hover:opacity-0 transition-all translate-x-0 group-hover:translate-x-[-100%] duration-200">
        {children}
      </p>

      <span className="absolute opacity-0 group-hover:opacity-100 transition-all translate-x-full group-hover:translate-x-0 duration-200">
        {children}
      </span>

      <span className="right-0 absolute border-y border-yame border-r w-5 group-hover:w-full h-full transition-all duration-500"></span>
    </button>
  );
}
