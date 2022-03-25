import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Header />
    </Box>
  );
}

export default App;
