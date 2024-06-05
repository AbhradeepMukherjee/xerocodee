"use client";
import React, { FormEvent, useState } from "react";
import { GitHub, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Stack,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import useAuth from "@/context/useAuth";
import appwriteService from "@/controllers/authController";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const [error, setError] = useState("");

  const { setAuthStatus } = useAuth();

  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("created user");

    try {
      console.log(formData);
      if (formData.password !== confirmPassword) {
        setError("Wrong Password");
        return;
      }
      const userData = await appwriteService.createUserAccount(formData);
      if (userData) {
        console.log(userData);
        setAuthStatus(true);
        router.push("/onboardingone");
      }
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    }
  };
  const handleSignupWithGithub = () => {
    appwriteService.loginWithGithub();
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };
  return (
    <Stack
      direction="row"
      sx={{
        height: {xs: "85%", md: "90%"},
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
            component="h1"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              fontFamily: "nunito",
              textAlign: "center",
              color: "black",
            }}
          >
            Hello!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%" ,
            }}
          >
            <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
            <Typography
              variant="subtitle1"
              alignContent="center"
              sx={{
                mx: { xs: "1px", md: "2.5px" },
                color: "gray",
                fontWeight: 500,
                fontSize: { xs: "10px", md: "12px" },
              }}
            >
              Create Your Account
            </Typography>
            <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
          </Box>
          <Box
            component="form"
            mt={1}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            autoComplete="off"
            gap={3}
            noValidate
            onSubmit={createUser}
          >
            <TextField
              id="firstname"
              label="First Name"
              variant="outlined"
              type="text"
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
              value={formData.firstname}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstname: e.target.value }))
              }
            />
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              type="text"
              size="small"
              fullWidth
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
              value={formData.lastname}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastname: e.target.value }))
              }
            />
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
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
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
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <TextField
              id="confirm password"
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? "text" : "password"}
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
                    <IconButton onClick={handleToggleConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Sign up
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
                  color: "gray",
                  fontSize: { xs: "12px", md: "14px" },
                  fontFamily: "nunito",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  textTransform: "capitalize",
                }}
              >
                Sign Up With Google{"  "}<Google/>
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "white",
                  color: "gray",
                  fontSize: { xs: "12px", md: "14px" },
                  fontFamily: "nunito",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  textTransform: "capitalize",
                }}
                onClick={handleSignupWithGithub}
              >
                Sign Up With Github{"  "}<GitHub/>
              </Button>
            </Box>

            <Box alignSelf="center">
              <Typography
                variant="body1"
                color="gray"
                fontSize={{ xs: "10px", md: "12px" }}
                fontFamily="nunito"
              >
                Already have an Account?{" "}
                <Link
                  href="/login"
                  color="#1F64FF"
                  underline="none"
                  sx={{ fontWeight: 600 }}
                >
                  LOGIN
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
