import CartProvider from "@/context/CartProvider";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Yantun Khaijan",
    default: "Yantun Khaijan",
  },
  description: "Best Fastfood Service in Noakhali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-5 py-2 flex  items-center justify-between gap-5 bg-stone-800">
          <Link href="/">
            {/* <img src="/logo.png" alt="" className="w-[120px]" /> */}
            <Image
              width={120}
              height={50}
              src="/logo.png"
              alt=""
              className="w-[120px]"
            />
          </Link>

          <div className="space-x-5">
            <Link className="btn" href="/foods">
              Food
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
