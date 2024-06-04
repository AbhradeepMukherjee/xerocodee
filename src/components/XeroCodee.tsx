"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { CircularProgress } from "@mui/joy";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import Image from "next/image";
import React from "react";
export default function XeroCodee() {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Box
      component="main"
      sx={{
        p: 2,
        mr: 20,
        background: "linear-gradient(to bottom, #ffffff, #f1f7ff)",
        height: "800px",
        width: "1200px",
        borderRadius: "25px",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to bottom, #ffffff, #f1f7ff)",
          borderRadius: "25px",
          paddingX: "40px",
          paddingY: "10px",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          color="#231F20"
          fontFamily="nunito"
          fontWeight="700"
          fontSize="75px"
          sx={{ cursor: "default" }}
          gutterBottom
        >
          Hi User!
        </Typography>
        <Typography
          variant="h4"
          color="#000000"
          fontFamily="nunito"
          fontWeight="500"
          fontSize="18px"
          sx={{ cursor: "default" }}
          gutterBottom
        >
          Welcome to XeroCodee Ecosystem 😎
        </Typography>
        <Box
          bgcolor="inherit"
          position="absolute"
          right="20px"
          top="20px"
          color="black"
          display="flex"
        >
          <Typography
            color="#231F20"
            fontFamily="nunito"
            fontSize="16px"
            alignSelf="center"
            sx={{ cursor: "default" }}
          >
            Test Mode
          </Typography>
          <Switch
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            sx={{ alignSelf: "center" }}
          />
          <Typography
            color="#231F20"
            fontFamily="nunito"
            fontSize="16px"
            alignSelf="center"
            sx={{ cursor: "default" }}
          >
            Production Mode
          </Typography>
        </Box>
      </Box>
      <Steps />
    </Box>
  );
}

const Steps = () => {
  return (
    <Stack direction="row" padding={2}>
      <Image
        src="/steps.png"
        height={700}
        width={50}
        alt="steps"
      />
      <Stack direction="column" gap={5}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </Stack>
      <Progress />
    </Stack>
  );
};

const StepOne = () => {
  return (
    <Stack direction="column" gap={2} ml={4}>
      <Box>
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="16px"
          fontWeight="700"
          sx={{ cursor: "default" }}
        >
          Step 1
        </Typography>
        <Typography
          color="#797979"
          fontFamily="nunito"
          fontSize="12px"
          fontWeight="500"
          sx={{ cursor: "default" }}
        >
          Connect to Cloud
        </Typography>
        <Stack direction="row" mt={1} gap={4}>
          <Box
            position="relative"
            height="100px"
            width="210px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              AWS
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#FFF5E5",
                border: "1px solid #FFDFA2",
                ml: "40px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/aws.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 35px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="100px"
            position="relative"
            width="210px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              GCP
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#ECF3FE",
                border: "1px solid #4192FF",
                ml: "40px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/gcp.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

const StepTwo = () => {
  return (
    <Stack direction="column" gap={2} ml={4}>
      <Box>
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="16px"
          fontWeight="700"
          sx={{ cursor: "default" }}
        >
          Step 2
        </Typography>
        <Typography
          color="#797979"
          fontFamily="nunito"
          fontSize="12px"
          fontWeight="500"
          sx={{ cursor: "default" }}
        >
          Connect to Source Code
        </Typography>
        <Stack direction="row" mt={1} gap={4}>
          <Box
            height="100px"
            position="relative"
            width="210px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              Github
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#E9E9E9",
                border: "1px solid #C0C0C0",
                ml: "20px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/github.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 70px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="100px"
            position="relative"
            width="210px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              Gitlab
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#FCECEA",
                border: "1px solid #F77556",
                ml: "25px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/gitlab.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="100px"
            position="relative"
            width="220px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              Bitbucket
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#E0ECFF",
                border: "1px solid #4192FF",
                ml: "5px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/bitbucket.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

const StepThree = () => {
  return (
    <Stack direction="column" gap={2} ml={4}>
      <Box>
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="16px"
          fontWeight="700"
          sx={{ cursor: "default" }}
        >
          Step 3
        </Typography>
        <Typography
          color="#797979"
          fontFamily="nunito"
          fontSize="12px"
          fontWeight="500"
          sx={{ cursor: "default" }}
        >
          Connect to DataSource
        </Typography>
        <Stack direction="row" mt={1} gap={4}>
          <Box
            height="100px"
            position="relative"
            width="230px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              MongoDB
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#EDF5ED",
                border: "1px solid #34A853",
                ml: "5px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/mongodb.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="100px"
            position="relative"
            width="215px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              RedisDB
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#FBEAE9",
                border: "1px solid #F77556",
                ml: "5px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/redis.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50px 50px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="100px"
            position="relative"
            width="245px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="22px"
              color="#242331"
              alignSelf="center"
            >
              PostgreSQL
            </Typography>
            <Box
              sx={{
                width: "93px",
                height: "82px",
                bgcolor: "#ECF3FE",
                border: "1px solid #4192FF",
                ml: "8px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/postgresql.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

const Progress = () => {
  return (
    <Stack
      direction="column"
      width="40%"
      minHeight="600px"
      boxShadow={2}
      ml={3}
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #f1f7ff)",
        borderRadius: "25px",
        paddingX: "20px",
        paddingY: "2px",
        position: "relative",
      }}
    >
      <Box paddingY={2}>
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="22px"
          textAlign="center"
          fontWeight="bold"
        >
          Your Progress
        </Typography>
        <Typography
          color="#818181"
          fontFamily="nunito"
          textAlign="center"
          fontSize="14px"
          fontWeight="bold"
        >
          towards XeroCodee
        </Typography>
      </Box>

      <CircularProgress
        determinate
        variant="solid"
        sx={{
          color: "#0D64DE",
          alignSelf: "center",
          "--CircularProgress-size": "170px",
          "--CircularProgress-trackThickness": "30px",
          "--CircularProgress-progressThickness": "30px",
        }}
        value={66}
      >
        <Typography
          color="black"
          fontFamily="nunito"
          fontSize="22px"
          fontWeight="bold"
        >
          66%
        </Typography>
      </CircularProgress>

      <Stack direction="column" mt={2} gap={1}>
        <Button
          sx={{
            width: "109px",
            height: "32px",
            bgcolor: "#FBFCFE",
            border: "0.5px solid #DDE4F0",
            color: "#797979",
            textTransform: "capitalize",
            fontFamily: "nunito",
            fontWeight: "bold",
            fontSize: "12px",
            borderRadius: "20px",
            alignSelf: "center",
          }}
        >
          View Details
        </Button>
        <Box>
          <Typography
            color="#797979"
            fontFamily="nunito"
            fontSize="14px"
            fontWeight="bold"
          >
            Step 1
          </Typography>
          <Box
            height="60px"
            position="relative"
            width="100%"
            bgcolor="#FFF5E5"
            paddingY="5px"
            borderRadius="10px"
            boxShadow="2"
            display="flex"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Stack direction="column">
              <Typography
                fontFamily="nunito"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                AWS
              </Typography>
              <Typography
                fontFamily="nunito"
                fontSize="12px"
                fontWeight="bold"
                color="#797979"
              >
                Status: Complete
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "56px",
                height: "52px",
                bgcolor: "#FFFFFF",
                border: "1px solid #FFDFA2",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/aws.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "35px 25px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              right="5px"
              display="flex"
              gap="3px"
              sx={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {Array.from(Array(3)).map((_, index)=>(<Box
                sx={{
                  bgcolor: "#C9C9C9",
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
                key={index}
              ></Box>))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            color="#797979"
            fontFamily="nunito"
            fontSize="14px"
            fontWeight="bold"
          >
            Step 2
          </Typography>
          <Box
            height="60px"
            position="relative"
            width="100%"
            bgcolor="#FCECEA"
            paddingY="5px"
            borderRadius="10px"
            boxShadow="2"
            display="flex"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Stack direction="column">
              <Typography
                fontFamily="nunito"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                Gitlab
              </Typography>
              <Typography
                fontFamily="nunito"
                fontSize="12px"
                fontWeight="bold"
                color="#797979"
              >
                Status: Complete
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "56px",
                height: "52px",
                bgcolor: "#FFFFFF",
                border: "1px solid #F77556",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/gitlab.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "30px 35px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              right="5px"
              display="flex"
              gap="3px"
              sx={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {Array.from(Array(3)).map((_, index)=>(<Box
                sx={{
                  bgcolor: "#C9C9C9",
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
                key={index}
              ></Box>))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            color="#797979"
            fontFamily="nunito"
            fontSize="14px"
            fontWeight="bold"
          >
            Step 3
          </Typography>
          <Box
            height="60px"
            position="relative"
            width="100%"
            bgcolor="#EDF5ED"
            paddingY="5px"
            borderRadius="10px"
            boxShadow="2"
            display="flex"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Stack direction="column">
              <Typography
                fontFamily="nunito"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                MongoDB
              </Typography>
              <Typography
                fontFamily="nunito"
                fontSize="12px"
                fontWeight="bold"
                color="#797979"
              >
                Status: Pending
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "56px",
                height: "52px",
                bgcolor: "#FFFFFF",
                border: "1px solid #34A853",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/mongodb.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "30px 35px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              right="5px"
              display="flex"
              gap="3px"
              sx={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {Array.from(Array(3)).map((_, index)=>(<Box
                sx={{
                  bgcolor: "#C9C9C9",
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
                key={index}
              ></Box>))}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
