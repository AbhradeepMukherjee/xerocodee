"use client";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Stack
      direction="row"
      sx={{
        height: "75%",
        padding: "7px",
        width: "55%",
        bgcolor: "white",
        border: "2px solid gray",
        borderRadius: "0 20px 20px 20px",
      }}
    >
      <Box paddingY={7} paddingX={3} width="50%">
        <Stack direction="column">
          <Typography
            variant="h5"
            fontSize="32px"
            fontWeight={700}
            fontFamily="nunito"
            align="center"
            component="h1"
            color="black"
          >
            Welcome!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
            <Typography
              variant="subtitle1"
              sx={{ mx: "2.5px", color: "gray", fontWeight: 500 }}
              fontSize="12px"
            >
              Login To Your Account
            </Typography>
            <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
          </Box>
          <Box
            component="form"
            mt={8}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            autoComplete="off"
            gap={3}
            noValidate
          >
            <TextField
              id="outlined-basic"
              label="Email-Id"
              variant="outlined"
              type="email"
              size="small"
              fullWidth
              required
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
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              size="small"
              fullWidth
              required
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
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: "#1F64FF", color: "white", fontSize: "16px" }}
              fullWidth
            >
              Login
            </Button>
            <Typography
              fontFamily="nunito"
              fontWeight={700}
              fontSize="14px"
              align="center"
              color="gray"
            >
              OR
            </Typography>
            <Box display="flex" justifyContent={"space-between"}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "white",
                  color: "gray",
                  fontSize: "14px",
                  fontFamily: "nunito",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  textTransform: "capitalize",
                }}
              >
                Login With Google
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "white",
                  color: "gray",
                  fontSize: "14px",
                  fontFamily: "nunito",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  textTransform: "capitalize",
                }}
              >
                Login With Github
              </Button>
            </Box>
            <Box alignSelf="center">
              <Typography
                variant="body1"
                color="gray"
                fontSize="12px"
                fontFamily="nunito"
              >
                Don&apos;t have an Account?{" "}
                <Link
                  href="#"
                  color="#1F64FF"
                  underline="none"
                  sx={{ fontWeight: 600 }}
                >
                  SIGN UP
                </Link>
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        component="hr"
        sx={{
          border: "1px solid",
          borderColor: "#DDE0E9",
        }}
        height="80%"
        alignSelf="center"
      />
      <Box width="50%" position="relative">
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100px",
            backgroundImage: "url(/vector.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Box>
    </Stack>
  );
}
