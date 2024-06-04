"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import React, { useState } from "react";
export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "inherit", boxShadow: "0", paddingY: 2 }}
    >
      <Toolbar>
        <div
          style={{
            flexGrow: 1,
            alignSelf: "center",
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <IconButton
            sx={{
              bgcolor: "#FFC656",
              borderRadius: "50px",
              width: "180px",
              color: "black",
              "&:hover": {
                backgroundColor: "#FFC656",
              },
              "&:focus": {
                backgroundColor: "#FFC656",
              },
              alignItems: "flex-start",
              gap: "5px",
              boxShadow: "4"
            }}
          >
            <Box
              alignSelf="center"
              alignItems="center"
              borderRadius="50%"
              width="38px"
              height="38px"
              bgcolor="white"
              boxShadow={2}
            >
              <CardGiftcardIcon
                sx={{ width: "20px", height: "20px", alignSelf: "center" }}
              />
            </Box>
            <Typography
              alignSelf="center"
              fontFamily="nunito"
              fontSize="16px"
              fontWeight="bold"
            >
              Upgrade Plan
            </Typography>
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "white",
              height: "50px",
              width: "50px",
              borderRadius: "20%",
              color: "#0C5BC6",
              boxShadow: "4",
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "white",
              height: "50px",
              width: "50px",
              borderRadius: "20%",
              color: "#0C5BC6",
              boxShadow: "4",
            }}
          >
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "white",
              height: "50px",
              width: "50px",
              borderRadius: "20%",
              color: "#0C5BC6",
              boxShadow: "4",
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
          <div style={{display: "flex"}}>
            <Dropdown />
            <IconButton
              sx={{
                bgcolor: "white",
                height: "50px",
                width: "50px",
                borderRadius: "20%",
                color: "#0C5BC6",
                boxShadow: "4",
              }}
            >
              <Person2OutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ alignSelf: "center", marginLeft: "6px" }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        sx={{ color: "black", fontFamily: "nunito", fontSize: "16px", fontWeight: "bold", textTransform: "capitalize" }}
      >
        XeroCodee
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Element 1</MenuItem>
        <MenuItem onClick={handleClose}>Element 2</MenuItem>
        <MenuItem onClick={handleClose}>Element 3</MenuItem>
      </Menu>
    </div>
  );
};
