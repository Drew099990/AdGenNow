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
          <header className="flex justify-between items-center p-4 gap-4 h-16">
           <div className='border-4 border-r-2 opacity-75 font-bold rounded-2xl shadow-2xl p-2 underline animate-slide2' style={{fontStyle:"cursive"}}>AdGenNow</div>
            <div className='flex justify-between items-center p-4 gap-4 h-16'>
              <SignedOut>
              <div className='border-2 px-3 rounded-2xl hover:bg-green-200 duration-300 '><SignInButton mode='modal' /></div>
              <div className='border-2 px-3 rounded-2xl hover:bg-green-200 duration-300'><SignUpButton mode='modal' /></div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
            
          </header>
            <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
