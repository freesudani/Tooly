import React from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Badge,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { logoVariant } from "../animations/Variants";

const useStyles = makeStyles({
  toolbar: {
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  mycart: {
    marginRight: "0.5rem",
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const theme = useTheme();
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="logo"
            className={classes.logo}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 0 24 24"
              width="34px"
              fill="#FFFFFF"
              variants={logoVariant}
              initial="hidden"
              animate="visible"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </motion.svg>
            <Typography variant="h4">Tooly</Typography>
          </IconButton>
          {!MQsm && (
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
              Call Us : 827-1634-543
            </Typography>
          )}
          <Button
            variant="contained"
            disableElevation
            onClick={props.handleOpen}
          >
            <Typography variant="body1" className={classes.mycart}>
              GET QUOTE
            </Typography>
            <Badge badgeContent={cartQuantity} color="error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
