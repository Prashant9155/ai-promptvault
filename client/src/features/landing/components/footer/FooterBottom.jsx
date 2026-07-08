export default function FooterBottom() {
  return (
    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
      <p>
        © {new Date().getFullYear()} AI PromptVault.
        All rights reserved.
      </p>

      <p>
        Built with ❤️ using Next.js, Tailwind CSS &
        Gemini AI.
      </p>
    </div>
  );
}