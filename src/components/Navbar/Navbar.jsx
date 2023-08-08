import {
  ArrowDownward,
  Brush,
  Calculate,
  CalendarMonth,
  Email,
  KeyboardArrowDown,
  List,
  Menu as MenuIcon,
  Message,
  Person,
  ShoppingCart,
  Warning,
} from "@mui/icons-material";
import { BsFillEraserFill } from "react-icons/bs";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SquareButton from "../SquareButton";
import useSidebar from "../../hooks/useSidebar";

const Navbar = () => {
  const sidebarHandle = useSidebar();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        boxShadow: "0px 6px 10px 0px #00000036",
        position: "relative",
        zIndex: "9999",
      }}
    >
      <Toolbar variant="dense">
        {/* Navbar Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ minWidth: "255px" }}
          >
            <IconButton
              color="white"
              size="large"
              onClick={sidebarHandle.onToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography sx={{ fontWeight: "700" }}>
              شركة الجياد الابيض
            </Typography>
          </Stack>

          <Box
            sx={{
              display: {xs: "none", xl: "flex"},
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <Switch color="white" />
              <SquareButton icon={<Brush />} />
              <input
                type="text"
                style={{
                  backgroundColor: "white",
                  borderRadius: "3px",
                  height: "32px",
                  outline: "none",
                  borderWidth: "0",
                  padding: "10px 11px",
                  fontSize: "15px",
                }}
                placeholder="بحث ..."
              />
            </Stack>

            <Stack direction="row" alignItems="center" gap={1}>
              <Button
                variant="contained"
                color="yellow"
                sx={{ color: "#000", fontWeight: "700" }}
              >
                الخدمات الإضافية
              </Button>
            </Stack>

            <Stack direction="row" alignItems="center" gap={1}>
              <SquareButton icon={<Message />} />
              <Button variant="contained" sx={{ backgroundColor: "#3489ca" }}>
                HR
              </Button>
              <SquareButton icon={<Calculate />} />
              <SquareButton icon={<CalendarMonth />} />
              <SquareButton icon={<Email />} />
              <SquareButton icon={<Warning />} label="150" />
              <SquareButton icon={<List />} />
              <SquareButton
                icon={<BsFillEraserFill style={{ fontSize: "1.5rem" }} />}
              />
              <Button
                sx={{ backgroundColor: "#3489ca", color: "#fff", gap: "10px" }}
                startIcon={<ShoppingCart />}
              >
                نقاط البيع
              </Button>

              <Button variant="contained" onClick={handleClick}>
                <Person />
                admin
                <KeyboardArrowDown />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

              >
                <MenuItem onClick={handleClose}>الحساب</MenuItem>
                <MenuItem onClick={handleClose}>تسجيل الخروج</MenuItem>
              </Menu>
            </Stack>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
