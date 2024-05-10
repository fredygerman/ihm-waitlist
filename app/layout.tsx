import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/styles/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
// import { Footer } from "@/components/Footer";
// import { Navbar } from "@/components/Navbar";
// import { ScrollToTop } from "@/components/ScrollToTop";

import "./globals.css";
import { siteConfig } from "@/config/site";

const { title, description } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  title: {
    default: `${title} `,
    template: `%s | ${title}`,
  },
  description: description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex max-h-screen flex-col ">
            {/* <Navbar /> */}

            {/* <div className="flex-1"> */}
            {children}
            {/* </div> */}
            {/* <Footer /> */}
            {/* <ScrollToTop /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
