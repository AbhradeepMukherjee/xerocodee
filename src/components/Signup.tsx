"use client";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };
  return (
    <Stack
      direction="row"
      sx={{
        height: "90%",
        padding: "7px",
        width: "55%",
        bgcolor: "white",
        border: "2px solid gray",
        borderRadius: "0 20px 20px 20px",
      }}
    >
      <Box paddingY={4} paddingX={3} width="50%">
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
            Hello!
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
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              type="text"
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
              label="Last Name"
              variant="outlined"
              type="text"
              size="small"
              fullWidth
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
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? "text" : "password"}
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
                    <IconButton onClick={handleToggleConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              Sign up
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
                Sign Up With Google
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
                Sign Up With Github
              </Button>
            </Box>
            <Box alignSelf="center">
              <Typography
                variant="body1"
                color="gray"
                fontSize="12px"
                fontFamily="nunito"
              >
                Already have an Account?{" "}
                <Link
                  href="#"
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
