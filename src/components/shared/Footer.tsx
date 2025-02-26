"use client";

import { navlinks } from "@/constants";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-start py-12">
          {/* Logo */}
          <Link className="rounded-lg p-2 hover:bg-accent" href="/">
            <Image
              className="h-[30px] w-auto"
              src="/logo.png"
              alt="Logo"
              height={30}
              width={265}
            />
          </Link>
          <ul className="mt-10 hidden items-center justify-center gap-5 text-xs font-bold tracking-widest lg:flex">
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
        </div>
        {/* <Separator /> */}
        <hr className="h-[1px]" />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Pinoy385 . All rights reserved.
          </span>
          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
