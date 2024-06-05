"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
export default function Repositories() {
  const router = useRouter();
  return (
    <Grid
      container
      rowSpacing={{ xs: 3, sm: 4, md: 5 }}
      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
    >
      {Array.from(Array(8)).map((_, index) => (
        <Grid item xs={12} lg={6} key={index}>
          <Box
            bgcolor="white"
            height={{ xs: "100px", lg: "110px" }}
            color="black"
            display="flex"
            border="1px solid #C0C0C0"
            borderRadius="5px"
            padding={2}
            gap={2}
          >
            <Button
              sx={{
                width: "80px",
                height: "80px",
                border: "1.5px solid #8F8F8F",
                alignSelf: "center",
              }}
              onClick={() => router.push("/")}
            />
            <Stack direction="column" width="80%" alignSelf="center" gap={1}>
              <Typography
                fontFamily="nunito"
                fontSize={{ xs: "18px", lg: "22px" }}
                fontWeight="500"
              >
                Import Existing App
              </Typography>
              <Typography
                fontFamily="nunito"
                fontSize={{ xs: "16px", lg: "18px" }}
                fontWeight="300"
              >
                Import an existing app from your own repository
              </Typography>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
