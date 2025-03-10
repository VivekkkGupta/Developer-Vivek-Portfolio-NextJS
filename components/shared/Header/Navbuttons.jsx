"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

function Navbuttons() {
  return (
    <>
      {/* <Button
        variant="ghost"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <Link href="/sign-in">
          <UserIcon size={24} />
        </Link>
      </Button> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="md:hidden focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <MenuIcon size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-50 w-full">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <Link href="/">
              <Button
                variant="ghost"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Home
              </Button>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Link href="/blog">
              <Button
                variant="ghost"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Blog
              </Button>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Link href="/projects">
              <Button
                variant="ghost"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Projects
              </Button>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Link href="/about">
              <Button
                variant="ghost"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                About
              </Button>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Link href="/resume">
              <Button
                variant="ghost"
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Resume
              </Button>
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem></DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Navbuttons;
