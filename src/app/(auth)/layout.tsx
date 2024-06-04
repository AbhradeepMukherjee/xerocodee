import React from "react";
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-screen max-h-full bg-gradient-to-b from-[#7AB2FF] to-[#FFF] flex justify-center items-center">
      {children}
    </div>
  );
}
