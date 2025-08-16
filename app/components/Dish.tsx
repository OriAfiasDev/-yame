import { TDish } from "../menu/types";

export const Dish = ({
  name,
  description,
  thumbnail,
  price,
  recommended,
  vegan,
  spicy,
}: TDish) => (
  <div className="w-full bg-white flex justify-between items-start gap-6 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] p-3 rounded-3xl relative">
    {recommended && (
      <span className="w-[60px] text-sm absolute right-[-2px] text-center rotate-[30deg] bg-yame text-[white] p-1 rounded-md ">
        מומלץ!
      </span>
    )}
    <img
      className="h-full w-[100px] object-cover transition-transform duration-[0.2s] rounded-2xl hover:translate-x-[-17%] hover:scale-150 lg:h-[120px] lg:w-[200px]"
      src={
        thumbnail ??
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
      }
      alt={name}
    />
    <div className="text-yame text-right overflow-hidden whitespace-nowrap w-full">
      <h2 className="text-2xl font-semibold align-top">{name}</h2>
      <pre
        className="text-black font-normal text-ellipsis overflow-hidden text-xs lg:text-lg"
        title={description}
      >
        {description}
      </pre>
      <div className=" flex items-center gap-2 mt-2">
        <div className="text-black text-xl">₪{price}</div>
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
);
