"use client"
import useAuth from "@/context/useAuth";
import appwriteService from "@/controllers/authController";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
export default function OnboardingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const {setAuthStatus} = useAuth();
  const router = useRouter();
  const handleLogout = ()=>{
    appwriteService.logout().then(()=>{
      setAuthStatus(false);
      router.replace("/")
    })
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#7AB2FF] to-[#FFF] flex justify-center items-center overflow-x-hidden">
      <Button
        sx={{
          position: "absolute",
          right: "10px",
          top: "10px",
          textTransform: "capitalize",
          border: "1px solid #666666",
          color: "#666666",
          fontWeight: 700,
          fontFamily: "nunito",
          width: "130px",
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
      {children}
    </div>
  );
}
