"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Repositories from "./Repositories";
export default function OnboardingThree() {
  return (
    <Stack
      direction="column"
      bgcolor="inherit"
      alignItems="center"
      height="80%"
      width="75%"
      mt={15}
      mb={10}
    >
      <Box
        bgcolor="white"
        width="100%"
        height={{ xs: "100px", md: "130px" }}
        borderRadius="30px"
        alignContent="center"
        mb={{ xs: 4, md: 6 }}
      >
        <Typography
          color="black"
          align="center"
          fontFamily="nunito"
          fontWeight={700}
          fontSize={{ xs: "15px", md: "32px" }}
        >
          Choose A Template To Deploy An Application 🚀
        </Typography>
        <Typography
          color="black"
          align="center"
          fontFamily="nunito"
          fontWeight={300}
          fontSize="20px"
          sx={{display: {xs: "none", lg: "block"}}}
        >
          Import your existing app or create a new one with our ready-made
          templates.
        </Typography>
      </Box>
      <Repositories />
    </Stack>
  );
}
