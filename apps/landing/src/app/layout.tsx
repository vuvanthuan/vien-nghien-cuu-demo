import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Geist, Geist_Mono } from "next/font/google";

import { cn } from "@acme/ui";
import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import { Toaster } from "@acme/ui/toast";

import { Footer } from "~/components/layouts/footer";
import { Header } from "~/components/layouts/header";
import { env } from "~/env";

import "~/app/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ),
  title: "Viện Nghiên Cứu - Cổng thông tin và đào tạo",
  description:
    "Cung cấp các sản phẩm và dịch vụ nghiên cứu, đào tạo chất lượng cao.",
  openGraph: { siteName: "Viện Nghiên Cứu" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground flex min-h-screen flex-col font-sans antialiased",
          "[font-family:var(--font-be-vietnam-pro)]",
          beVietnamPro.variable,
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{props.children}</main>
          <Footer />
          <div className="fixed right-4 bottom-4 z-50">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
