import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-2 md:flex lg:gap-3">
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

      <Button variant="ghost" asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button asChild>
        <Link href="/register">Get Started</Link>
      </Button>
    </div>
  );
}