import { Box, Grid, Toolbar } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import HomeFilter from "../components/HomeFilter";
import HomeSort from "../components/HomeSort";
import HomeTable from "../components/HomeTable";
import HomeLineChart from "../components/charts/HomeLineChart";
import useSidebar from "../hooks/useSidebar";

const Home = () => {
  const sidebarHandle = useSidebar()
  return (
    <Box display="flex" alignItems="center" sx={{}}>
      <Sidebar />

      <Box
        style={{
          backgroundColor: "#eee",
          flexGrow: sidebarHandle.isOpen ? "0" : "1",
          overflow: "hidden",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flex: 1,
              py: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              
            }}
          >
            <HomeFilter />
            <HomeSort />
              <HomeTable />
            <HomeLineChart />
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Home;
