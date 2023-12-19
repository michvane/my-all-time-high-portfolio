import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import "./theme-config.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Calculate Your All-Time High Crypto Portfolio Value",
  description:
    "Unlock your crypto potential with our all-time high portfolio calculator. See what your portfolio could be worth if it reached its ATH prices! Simply enter your holdings and we'll show you the potential profit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance="dark"
          accentColor="ruby"
          grayColor="sand"
          radius="large"
        >
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
