import { MenuIcon, Sun, SunIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";

function Menu() {
  return (
    <>
      <nav className="hidden md:flex w-full gap-1">
        <div className="flex">
          <Link href="/">
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            Home
          </Button>
            </Link>
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Link href="/blog">Blog</Link>
          </Button>
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Link href="/projects">Projects</Link>
          </Button>
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Link href="/resume">Resume</Link>
          </Button>
        </div>
        <ModeToggle />
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <MenuIcon size={24} />
        </Button>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Link href="/sign-in">
            <UserIcon size={24} />
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden"></nav>
    </>
  );
}

export default Menu;
