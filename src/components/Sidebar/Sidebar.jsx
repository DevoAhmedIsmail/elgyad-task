import { Send, StarBorder } from "@mui/icons-material";
import {
  Box,
  Drawer,
  useMediaQuery,

} from "@mui/material";
import React, { useEffect } from "react";
import LinksList from "./LinksList";
import useSidebar from "../../hooks/useSidebar";

const Sidebar = () => {
  const sidebarHandle = useSidebar()
  console.log(sidebarHandle.isOpen);
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(()=>{
    if(isLargeScreen) {
      sidebarHandle.onOpen()
    }else {
      sidebarHandle.onClose()
    }
  },[])

  return (
      <Drawer
        open={sidebarHandle.isOpen}
        onClose={sidebarHandle.onClose}
        variant="persistent"
        anchor="right"
        
        sx={{
          position: "sticky",
          width: sidebarHandle.isOpen ? {xs: "200px", lg: "300px"}:"0",
          "& .MuiPaper-root": {
            width: {xs: "200px", lg: "300px"},
            top: "0",
            
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1e5b8a",
            color: "#fff",
            width: "100%",
            height: "100%",
            pt: "48px"
          }}
        >
          {/* LINKS */}
          <LinksList />
        </Box>
      </Drawer>
  );
};

export default Sidebar;
