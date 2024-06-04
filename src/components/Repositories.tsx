"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
export default function Repositories() {
  return (
    <Grid
      container
      rowSpacing={{ xs: 3, sm: 4, md: 5 }}
      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
    >
      {Array.from(Array(8)).map((_, index)=>(<Grid item xs={12} sm={6} key={index}>
        <Box bgcolor="white" height="110px" color="black" display="flex" border="1px solid #C0C0C0" borderRadius="5px" padding={2} gap={2} >
          <Box width="80px" height="80px" border="1.5px solid #8F8F8F" alignSelf="center"/>
          <Stack direction="column" width="80%" alignSelf="center" gap={1}>
            <Typography fontFamily="nunito" fontSize="22px" fontWeight="medium">Import Existing App</Typography>
            <Typography fontFamily="nunito" fontSize="18px" fontWeight="light">Import an existing app from your own repository</Typography>
          </Stack>
        </Box>
      </Grid>))}
    </Grid>
  );
}
