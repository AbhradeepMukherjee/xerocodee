"use client"
import LandingPage from "@/components/LandingPage";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function home() {
  const {authStatus} = useAuth();
  const router = useRouter();
  useEffect(()=>{
    console.log(authStatus);
    !authStatus && router.push("/login")
  },[])
  return (
    <LandingPage/>
  );
}
