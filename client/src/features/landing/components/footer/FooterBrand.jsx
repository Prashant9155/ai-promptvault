import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function FooterBrand() {
  return (
    <div className="space-y-6">
      <Link href="/">
        <Image
          src="/lightWebLogo.png"
          alt="AI PromptVault"
          width={220}
          height={55}
          className="block dark:hidden"
          priority
        />

        <Image
          src="/darkWebLogo.png"
          alt="AI PromptVault"
          width={220}
          height={55}
          className="hidden dark:block"
          priority
        />
      </Link>

      <p className="max-w-sm text-sm leading-7 text-muted-foreground">
        AI PromptVault helps developers, creators and AI teams
        store, organize, version and improve prompts using
        Gemini AI.
      </p>

      <div className="flex gap-3">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          className="rounded-xl border p-3 transition hover:border-primary hover:text-primary"
        >
          <FaGithub size={18} />
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          className="rounded-xl border p-3 transition hover:border-primary hover:text-primary"
        >
          <FaLinkedin size={18} />
        </Link>

        <Link
          href="https://x.com"
          target="_blank"
          className="rounded-xl border p-3 transition hover:border-primary hover:text-primary"
        >
          <FaXTwitter size={18} />
        </Link>
      </div>
    </div>
  );
}