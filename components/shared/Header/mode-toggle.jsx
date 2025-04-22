"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoonIcon } from "lucide-react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    console.log("Theme was", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="ghost"
      className="focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={handleThemeChange}
    >
      {
        !mounted ? (
          <SunMoonIcon />
        ) : theme === "light" ? (
          <SunIcon />
        ) : theme === "dark" ? (
          <MoonIcon />
        ) : (
          <SunMoonIcon />
        )}
    </Button>
  );
};

export default ModeToggle;