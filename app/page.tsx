import Link from "next/link";
import { Button } from "./components/button";

import { BsInstagram, BsFacebook, BsGoogle } from "react-icons/bs";
import { FaWaze } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-80">
      <Link href="/menu" className="w-full">
        <button className="bg-[url(https://vpjgxnutcrreojzqewaw.supabase.co/storage/v1/object/public/images/menu.webp)] bg-cover shadow-2xl mb-8 border-4 border-white rounded-2xl w-full cursor-pointer hover">
          <div className="flex justify-center items-center bg-black opacity-65 px-4 py-12 rounded-2xl w-full h-full font-karantina text-white text-5xl tracking-wider">
            צפייה בתפריט
          </div>
        </button>
      </Link>

      <div className="gap-x-12 gap-y-6 grid grid-cols-2">
        <Link
          href="https://www.facebook.com/people/YaMe-Beach-Bar/61576309590063/#"
          aria-label="Open facebook page"
        >
          <Button Icon={BsFacebook} name="facebook" />
        </Link>
        <Link
          href="https://www.instagram.com/yame_beach_bar/"
          aria-label="Open Instagram Page"
        >
          <Button Icon={BsInstagram} name="instagram" />
        </Link>

        <Link href="/map" aria-label="Navigate to Google maps page">
          <Button Icon={BsGoogle} name="googleMaps" />
        </Link>

        <Link
          href="https://ul.waze.com/ul?ll=31.99898684%2C34.73219275&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&navigate=yes"
          aria-label="Navigate Via waze"
        >
          <Button Icon={FaWaze} name="waze" />
        </Link>
      </div>
    </div>
  );
}
