import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/styles/fonts";
// import { Footer } from "@/components/Footer";
// import { Navbar } from "@/components/Navbar";
// import { ScrollToTop } from "@/components/ScrollToTop";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { Providers } from "@/components/providers/providers";
import { env } from "@/env.mjs";

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
      {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" &&
      env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
        <script
          async
          src={`${env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
          data-website-id={`${env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}`}
        />
      ) : null}
      <head />
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex max-h-screen flex-col ">
            {/* <Navbar /> */}

            {/* <div className="flex-1"> */}
            {children}
            {/* </div> */}
            {/* <Footer /> */}
            {/* <ScrollToTop /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
