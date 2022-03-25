import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Whyus from "./components/Whyus";
import Location from "./components/Location";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Header />
      <Whyus />
      <Location />
    </Box>
  );
}

export default App;
