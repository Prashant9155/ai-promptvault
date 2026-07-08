"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function AppLogo({
  mobile = false,
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
      width={mobile ? 42 : 180}
      height={42}
      priority={priority}
      className="h-auto w-auto"
    />
  );
}