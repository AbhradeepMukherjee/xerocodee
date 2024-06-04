import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata: Metadata = {
  title: "XeroCodee",
  description: "Predict. Optimize. Perform. Secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-gradient-to-b from-[#7AB2FF] to-[#FFF] flex justify-center items-center relative overflow-x-hidden">
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
