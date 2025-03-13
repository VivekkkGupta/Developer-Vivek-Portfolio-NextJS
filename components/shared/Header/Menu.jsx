import { MenuData } from "@/lib/data";
import Link from "next/link";
import React from "react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Navbuttons from "./Navbuttons";

function Menu() {
  return (
    <>
      <nav className="md:flex w-full gap-1">
        <div className="md:flex hidden">
          <Link href="/">
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Home
            </Button>
          </Link>
          {/* <Link href="/blog">
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Blog
            </Button>
          </Link> */}
          <Link href="/projects">
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              About
            </Button>
          </Link>
          <Link href="/resume">
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Resume
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Contact
            </Button>
          </Link>
        </div>
        <ModeToggle />
        <Navbuttons />
      </nav>
    </>
  );
}

export default Menu;
