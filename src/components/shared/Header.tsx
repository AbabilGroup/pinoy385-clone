"use client";

import { navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white py-3 shadow">
      <nav className="container flex items-center justify-between">
        <Link className="rounded-lg p-2 hover:bg-accent" href="/">
          <Image
            className="h-[30px] w-auto"
            src="/logo.png"
            alt="Logo"
            height={30}
            width={265}
          />
        </Link>

        <ul className="hidden items-center justify-end gap-5 text-xs font-bold tracking-widest lg:flex">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link className="group" href={link.href}>
                <span>{link.label}</span>
                <div
                  className={`${pathname === link.href ? "w-full" : "w-0"} h-[2px] rounded-full bg-primary-pi duration-300 group-hover:w-full`}
                ></div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <FaBars
                className="cursor-pointer text-3xl text-primary-pi"
                onClick={() => {}}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
