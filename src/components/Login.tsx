"use client";
import React, { FormEvent, useState } from "react";
import { GitHub, Google, Visibility, VisibilityOff } from "@mui/icons-material";
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
import appwriteService from "@/controllers/authController";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { account } from "@/models/userModel";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setAuthStatus } = useAuth();
  const router = useRouter();
  const loginUser = async (e: any) => {
    e.preventDefault();
    console.log("logged in user");
    try {
      const session = await appwriteService.login(loginData);
      console.log(session);
      if (session) {
        setAuthStatus(true);
        router.push("/");
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleLoginWithGithub = () => {
    appwriteService.loginWithGithub();
  }
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Stack
      direction="row"
      sx={{
        height: { md: "85%", xs: "65%" },
        padding: { md: "7px", xs: "3px" },
        width: {lg: "60%" ,md:"80%"},
        bgcolor: "white",
        border: "2px solid gray",
        borderRadius: "0 20px 20px 20px",
      }}
    >
      <Box
        sx={{
          py: { xs: 2, md: 4 },
          px: { xs: 1, md: 3 },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              fontFamily: "nunito",
              textAlign: "center",
              color: "black",
            }}
            component="h1"
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
              sx={{
                mx: { xs: "1px", md: "2.5px" },
                color: "gray",
                fontWeight: 500,
                fontSize: { xs: "10px", md: "12px" },
              }}
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
            onSubmit={loginUser}
          >
            <TextField
              id="email"
              label="Email-Id"
              variant="outlined"
              type="email"
              size="small"
              fullWidth
              required
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "12px", md: "14px" },
                  fontFamily: "nunito",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                },
                "& .MuiInputBase-root": {
                  fontSize: { xs: "12px", md: "14px" },
                  fontFamily: "nunito",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                },
              }}
              value={loginData.email}
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              size="small"
              fullWidth
              required
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "12px", md: "14px" },
                  fontFamily: "nunito",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                },
                "& .MuiInputBase-root": {
                  fontSize: { xs: "12px", md: "14px" },
                  fontFamily: "nunito",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={loginData.password}
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "#1F64FF",
                color: "white",
                fontSize: { xs: "14px", md: "16px" },
              }}
              fullWidth
            >
              Login
            </Button>
            <Typography
              fontFamily="nunito"
              fontWeight={700}
              fontSize={{ xs: "12px", md: "14px" }}
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
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: { xs: "12px", lg: "14px" },
                    fontFamily: "nunito",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  Login With Google{" "}<Google/>
                </Typography>
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  }
                }}
                onClick={handleLoginWithGithub}
              >
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: { xs: "12px", lg: "14px" },
                    fontFamily: "nunito",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  Login With Github{" "}<GitHub/>
                </Typography>
              </Button>
            </Box>
            <Box alignSelf="center">
              <Typography
                variant="body1"
                color="gray"
                fontSize={{ xs: "10px", md: "12px" }}
                fontFamily="nunito"
              >
                Don&apos;t have an Account?{" "}
                <Link
                  href="/signup"
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
          display: { xs: "none", md: "block" },
        }}
        height="80%"
        alignSelf="center"
      />
      <Box
        width="50%"
        position="relative"
        sx={{ display: { xs: "none", md: "block" } }}
      >
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
