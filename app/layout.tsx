import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ConvexClientProvider } from "./provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono,Luxurious_Roman,Outfit ,} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets :["latin"]
})

export const metadata: Metadata = {
  title: "AdGenNow.com",
  description: "is a platform that aids startups like you to build real time ads with zero stress any time anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} text-green-900`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton mode='modal' />
              <SignUpButton mode='modal' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
            <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
