import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebar.data";

export default function SidebarMenu({collapsed}) {
  return (
    <nav className="space-y-2">
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.href}
          item={item}
          collapsed={collapsed}
        />
      ))}
    </nav>
  );
}