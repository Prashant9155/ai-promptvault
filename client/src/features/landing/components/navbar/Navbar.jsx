"use client";

import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <NavbarBrand />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavbarLinks />
        </nav>

        {/* Desktop Actions */}
        <NavbarActions />

        {/* Mobile Navigation */}
        <MobileNavbar />
      </div>
    </header>
  );
}