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
import { MenuData } from "@/lib/data";

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
        <DropdownMenuContent className="mr-[20px] z-50 w-[300px] max-h-[100vh] overflow-y-auto">
          {MenuData.map((menu, index) => (
            <Link href={menu.url} key={index} className="cursor-pointer">
              <DropdownMenuCheckboxItem className="cursor-pointer py-3">
                
                  {menu.title}
                
              </DropdownMenuCheckboxItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Navbuttons;
