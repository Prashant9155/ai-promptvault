"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";

const NAV_ITEMS = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            AI
          </div>

          <div>
            <h2 className="text-lg font-bold">PromptVault</h2>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile */}

        <div className="flex items-center gap- md:hidden">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}

      {isOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="space-y-6 p-6">
            <nav className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>

              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
