"use client";

import { useState } from "react";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

function SidebarContent({ collapsed, onToggle }) {
  return (
    <div className="flex h-full flex-col bg-background">
      <SidebarHeader
        collapsed={collapsed}
        onToggle={onToggle}
      />

      <div className="flex-1 overflow-y-auto p-4">
        <SidebarMenu collapsed={collapsed} />
      </div>

      <SidebarFooter />
    </div>
  );
}

export function SidebarDrawer() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContent
      collapsed={collapsed}
      onToggle={() => setCollapsed(!collapsed)}
    />
  );
}

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden border-r bg-background transition-all duration-300 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col ${
        collapsed ? "lg:w-20" : "lg:w-72"
      }`}>
      <SidebarContent
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />
    </aside>
  );
}
