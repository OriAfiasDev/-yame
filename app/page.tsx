import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className="flex gap-8 items-center justify-between">
      <Link href="/menu">
        <Button>Menu</Button>
      </Link>
      <Link href="/map">
        <Button>Find Us</Button>
      </Link>
      <Link href="/ig">
        <Button>Facebook</Button>
      </Link>
      <Link href="https://www.instagram.com/yame_beach_bar/">
        <Button>Instagram</Button>
      </Link>
      <Link href="/ig">
        <Button>Work</Button>
      </Link>
    </div>
  );
}
