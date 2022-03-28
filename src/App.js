import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Whyus from "./components/Whyus";
import Location from "./components/Location";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Qoutation from "./components/Qoutation";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <CssBaseline />
      <Navbar handleOpen={handleOpen} />
      <Header />
      <Whyus />
      <Location />
      <Services />
      <Reviews />
      <Footer />
      <Qoutation open={open} handleClose={handleClose} />
    </Box>
  );
}

export default App;
