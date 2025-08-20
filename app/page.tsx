import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-96">
      <Link href="/menu" className="w-full">
        <button className="bg-[url(https://lh3.googleusercontent.com/pw/AP1GczMJTs3tItEgSCgecleMJ6Uzkzg-ObFL_0InMHqRb_EDeDC8VqH5K2_taK9KEMNnCjr4Cyu5KrCJoMuJ9ljVBBfvx5-ruZ_MC0dhE3vds8yoNUj11JuyFWAthZBAX37DTWPNIWQFhszJrlR069JDYUSg5g=w1726-h1294-s-no-gm?authuser=0)] bg-cover shadow-2xl border-4 border-white mb-6 w-full cursor-pointer rounded-2xl">
          <div className="flex justify-center items-center bg-black opacity-65 px-4 py-12 rounded-2xl w-full h-full font-karantina text-white text-5xl tracking-wider">
            צפייה בתפריט
          </div>
        </button>
      </Link>

      <div className="gap-x-12 gap-y-6 grid grid-cols-2">
        <Link href="/map">
          <Button>Find Us</Button>
        </Link>
        <Link href="https://www.facebook.com/people/YaMe-Beach-Bar/61576309590063/#">
          <Button>Facebook</Button>
        </Link>
        <Link href="https://www.instagram.com/yame_beach_bar/">
          <Button>Instagram</Button>
        </Link>
      </div>
    </div>
  );
}
