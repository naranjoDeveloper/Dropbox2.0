import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="flex items-center space-x-3">
        <div>
          <Image
            src={
              "https://ih1.redbubble.net/image.1826140766.0543/mo,small,flatlay,product_square,600x600.jpg"
            }
            alt="logo"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">SukunaStorage</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <Button variant="outline">
            <SignInButton afterSignInUrl="/dashboard" mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
