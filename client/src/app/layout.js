import "./globals.css";

import StoreProvider from "@/store/provider";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "AI PromptVault",
  description: "AI Prompt Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            {children}
            <Toaster richColors position="top-right" />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
