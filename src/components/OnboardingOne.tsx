"use client";
import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
export default function OnboardingOne() {
  const [isOrganization, setIsOrganization] = useState("");
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
        fontSize="28px"
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
        direction="row"
        display="flex"
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
          onClick={()=>setIsOrganization("")}
        >
          Developer
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
          onClick={() => setIsOrganization("organization")}
        >
          Organisation
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
          onClick={() => setIsOrganization("company")}
        >
          Company
        </Button>
      </Stack>
      {isOrganization==""?<></>: isOrganization=="organization" ? (
        <Stack alignSelf="center" direction="row" mt={10} gap={2}>
          <TextField
            id="outlined-basic"
            label="Organization Name"
            variant="outlined"
            type="name"
            size="small"
            autoComplete="off"
            sx={{
              width: "300px",
            }}
            InputLabelProps={{
              style: {
                fontSize: "14px",
                fontFamily: "nunito",
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
            InputProps={{
              style: {
                fontSize: "14px",
                fontFamily: "nunito",
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "#1F64FF", color: "white", fontSize: "14px" }}
          >
            Submit
          </Button>
        </Stack>
      ) : (
        <Stack alignSelf="center" direction="row" mt={10} gap={2}>
          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            type="name"
            size="small"
            autoComplete="off"
            sx={{
              width: "300px",
            }}
            InputLabelProps={{
              style: {
                fontSize: "14px",
                fontFamily: "nunito",
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
            InputProps={{
              style: {
                fontSize: "14px",
                fontFamily: "nunito",
                paddingLeft: "8px",
                paddingRight: "8px",
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "#1F64FF", color: "white", fontSize: "14px" }}
          >
            Submit
          </Button>
        </Stack>
      )}
    </Box>
  );
}
