import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { CSPostHogProvider } from "@/providers/postHog-provider";

export const metadata: Metadata = {
  title: {
    template: "%s - Payam Fakoorziba",
    default: "Payam Fakoorziba - Web designer and developer",
  },
  description:
    "I’m Payam, a web designer and developer based in Toronto, Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <CSPostHogProvider>
        <body className={cn(GeistSans.className, "relative")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            // disableTransitionOnChange
          >
            <Layout>{children}</Layout>
          </ThemeProvider>
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
