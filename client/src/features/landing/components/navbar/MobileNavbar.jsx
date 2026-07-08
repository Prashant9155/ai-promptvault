"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import NavbarLinks from "./NavbarLinks";

import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Actions */}
      <div className="flex shrink-0 items-center gap-1 md:hidden">
        <ThemeToggle />

        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/Prashant9155/ai-promptvault"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Drawer — positioned absolutely so it breaks out of the
          navbar's flex row and spans full width below the header */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-background shadow-lg md:hidden">
          <div className="space-y-6 p-5 sm:p-6">
            <nav className="flex flex-col gap-4 sm:gap-5">
              <NavbarLinks onItemClick={() => setIsOpen(false)} />
            </nav>

            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>

              <Button className="w-full" asChild>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}