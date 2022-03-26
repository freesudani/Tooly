import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Whyus from "./components/Whyus";
import Location from "./components/Location";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Header />
      <Whyus />
      <Location />
      <Services />
      <Reviews />
      <Footer />
    </Box>
  );
}

export default App;
