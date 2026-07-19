"use client";

import { Menu } from "lucide-react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SearchBar from "./SearchBar";
import NavbarActions from "./NavbarActions";
import { SidebarDrawer } from "../sidebar/DashboardSidebar";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger aschild = "true">  
            <ButtonPrimitive size="icon" variant="outline" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </ButtonPrimitive>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-0">
            <SidebarDrawer />
          </SheetContent>
        </Sheet>

        <SearchBar />
      </div>

      <NavbarActions />
    </header>
  );
}