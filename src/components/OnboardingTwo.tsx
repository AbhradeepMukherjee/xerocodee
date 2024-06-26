"use client"
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
export default function Onboardingtwo() {
    const router = useRouter();
  return (
    <Box
      sx={{
        height: "60%",
        width: "75%",
        bgcolor: "white",
        borderRadius: "20px",
      }}
      paddingY={9}
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h5"
        fontSize={{ xs: "24px", md: "28px" }}
        fontWeight={700}
        fontFamily="nunito"
        align="center"
        component="h1"
        color="black"
      >
        Welcome User!
      </Typography>
      <Stack
        mt={4}
        alignItems="center"
        gap={2}
        direction={{ xs: "column", md: "row" }}
        display="flex"
        sx={{
          flexDirection: {xs: "column", md: "row"}
        }}
        justifyContent="space-around"
      >
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "#FFF",
            color: "black",
            fontSize: "16px",
            fontFamily: "nunito",
            textTransform: "capitalize",
            boxShadow: 0,
            border: "1px solid #C0C0C0",
            width: "200px",
            "&:hover": {
              backgroundColor: "white",
              boxShadow: 0,
            },
            "&:focus": {
              color: "#FFF",
              backgroundColor: "#1F64FF",
            },
          }}
          onClick={() => {
            router.push("/onboardingthree");
          }}
        >
          Self Hosting
        </Button>
        <Button
           variant="contained"
           type="submit"
           sx={{
             bgcolor: "#FFF",
             color: "black",
             fontSize: "16px",
             fontFamily: "nunito",
             textTransform: "capitalize",
             boxShadow: 0,
             border: "1px solid #C0C0C0",
             width: "200px",
             "&:hover": {
               backgroundColor: "white",
               boxShadow: 0,
             },
             "&:focus": {
               color: "#FFF",
               backgroundColor: "#1F64FF",
             },
           }}
           onClick={() => {
             router.push("/onboardingthree");
           }}
        >
          XeroCodee Hosting
        </Button>
      </Stack>
    </Box>
  );
}
