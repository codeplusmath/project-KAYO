import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { ModalProvider } from "@/providers/model-provider";
import { title } from "process";
import prismadb from "@/lib/prismadb";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'KaYo Dashboard',
  description: 'Project KaYo Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ModalProvider/>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}