"use client";
import React, { useEffect, useState } from "react";
import useAuth from "@/context/useAuth";
import { AuthProvider } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/joy";
import appwriteService from "@/controllers/authController";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
 const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    appwriteService.isLoggedIn().then(
        setAuthStatus
    ).finally(()=>(setLoader(true)))
  }, []);
  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {loader ? 
      (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#7AB2FF] to-[#FFF] flex justify-center items-center relative overflow-x-hidden">
          {children}
        </div>
      ) 
      : (
        <CircularProgress
          color="neutral"
          sx={{
            "--CircularProgress-size": "600px",
            "--CircularProgress-trackThickness": "75px",
            "--CircularProgress-progressThickness": "75px",
          }}
        />
      )}
    </AuthProvider>
  );
}
