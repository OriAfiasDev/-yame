import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className="gap-4 grid grid-cols-2">
      <Link href="/menu">
        <Button>Menu</Button>
      </Link>
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
  );
}
