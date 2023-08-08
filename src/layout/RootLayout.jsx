import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';

const RootLayout = () => {
  return (
   <ThemeProvider  theme={theme}>

       <Navbar />
       <Outlet />
       {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default RootLayout