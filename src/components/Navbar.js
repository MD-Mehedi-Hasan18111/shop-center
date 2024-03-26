import Image from "next/image";
import React from "react";
import Link from "next/link";
import MenuIcon from "../global/assets/svg/menu.svg";
import Logo from "../global/assets/lws-logo-black.svg";
import avatar from "../global/assets/svg/avatar.svg";
import cartIcon from "../global/assets/svg/shopping-Cart.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-5 md:pr-16 pr-8 lg:py-6 md:mx-0 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src={MenuIcon}
            height="auto"
            width="auto"
            priority
            className="lg:hidden w-5 h-5"
            alt="menuIcon"
          />
          <Link href="/">
            <Image
              src={Logo}
              priority
              height="auto"
              width="auto"
              className="h-10"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={avatar}
          priority
          className="hidden lg:block w-[18px] h-[18px]"
          height="auto"
          width="auto"
          alt="login acount avatar"
        />
        <Image
          src={cartIcon}
          priority
          height="auto"
          width="auto"
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
