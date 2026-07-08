"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function AppLogo({
  mobile = false,
  className = "",
  priority = false,
}) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const src = mobile
    ? isDark
      ? "/darkPhnLogo.png"
      : "/lightPhnLogo2.png"
    : isDark
      ? "/darkWebLogo.png"
      : "/lightWebLogo.png";

  return (
    <Image
      src={src}
      alt="AI PromptVault"
      width={mobile ? 44 : 180}
      height={mobile ? 44 : 44}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );
}