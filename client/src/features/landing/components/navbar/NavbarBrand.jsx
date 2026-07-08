import Link from "next/link";
import AppLogo from "@/components/branding/AppLogo";

export default function NavbarBrand() {
  return (
    <Link
      href="/"
      aria-label="AI PromptVault Home"
      className="flex shrink-0 items-center"
    >
      {/* Desktop Logo */}
      <div className="hidden sm:block">
        <AppLogo priority />
      </div>

      {/* Mobile Logo */}
      <div className="sm:hidden">
        <AppLogo mobile priority />
      </div>
    </Link>
  );
}