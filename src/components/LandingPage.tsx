"use client"
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { Box } from "@mui/material";
import Image from "next/image";
export default function LandingPage () {
    const [selectedMenuItem, setSelectedMenuItem] = useState("XeroCodee");
    return(
        <Box sx={{ display: 'flex', paddingX: "10px", paddingTop: "10px" }}>
            <Image priority src="/logo.png" width={200} height={200} alt="logo" className="fixed left-9 top-10"/>
            <Header/>
            <Box display="flex" sx={{ marginTop: '64px' }}>
                <Sidebar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
                <Body selectedMenuItem={selectedMenuItem} />
            </Box>
        </Box>
            
    );
}