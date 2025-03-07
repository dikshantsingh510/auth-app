import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import NavHeader from "@/components/nav-header";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "(RBAS) - Auth App",
  description:
    "This is a Role-Based Access Control (RBAC) authentication app built using Next.js 15, React 19, TypeScript, Prisma, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavHeader />
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
