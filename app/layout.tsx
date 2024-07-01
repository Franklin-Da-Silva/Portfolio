import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const syne = Syne({ subsets: ["latin"] });
const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your folio 🫵🏾",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto`}
      >
        <ViewProvider>
          <Header />
          {children}
        </ViewProvider>
      </body>
    </html>
  );
}
