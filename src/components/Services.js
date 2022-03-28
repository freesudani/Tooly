import React, { useState } from "react";
import { Box, IconButton, Typography, Grid, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { tickVariant } from "../animations/Variants";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/service-slice";

const useStyles = makeStyles((theme) => ({
  services: {
    height: "60vh",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "95vh",
    },
  },
  submit: {
    marginTop: "2.5rem",
  },
}));

const Services = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [button6, setButton6] = useState(false);

  const button1ClickedHandler = () => {
    setButton1((currentState) => !currentState);
    dispatch(
      cartActions.addItemToCart({
        id: 1,
        title: "Installing Survillence Camera",
        price: 3400,
      })
    );
  };
  const button2ClickedHandler = () => {
    setButton2((currentState) => !currentState);
    dispatch(
      cartActions.addItemToCart({
        id: 2,
        title: "Electrician",
        price: 600,
      })
    );
  };
  const button3ClickedHandler = () => {
    setButton3((currentState) => !currentState);
    dispatch(
      cartActions.addItemToCart({
        id: 3,
        title: "Painter",
        price: 450,
      })
    );
  };
  const button4ClickedHandler = () => {
    setButton4((currentState) => !currentState);
    dispatch(
      cartActions.addItemToCart({
        id: 4,
        title: "Plumber",
        price: 400,
      })
    );
  };
  const button5ClickedHandler = () => {
    setButton5((currentState) => !currentState);
    dispatch(
      cartActions.addItemToCart({
        id: 5,
        title: "WaterProof",
        price: 700,
      })
    );
  };
  const button6ClickedHandler = () => {
    setButton6((currentState) => !currentState);
    dispatch(
      cartActions.addItemToCart({
        id: 6,
        title: "Handyman",
        price: 230,
      })
    );
  };

  const clearHandler = () => {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setButton5(false);
    setButton6(false);
    dispatch(cartActions.clearCart);
  };
  return (
    <Box className={classes.services}>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={6} sm={4}>
          <IconButton
            aria-label="delete"
            onClick={button1ClickedHandler}
            disabled={button1 && true}
          >
            {button1 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fc0a0a"
                variants={tickVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "5px", right: "5px" }}
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </motion.svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="60px"
              viewBox="0 0 24 24"
              width="60px"
              fill="#000000"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path d="M18,13c0-0.55-0.45-1-1-1h-4c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-1l2,1.06v-4.12L18,14V13z M12,3 L4,9v12h16v-2H6v-9l6-4.5l6,4.5v1h2V9L12,3z" />
              </g>
            </svg>
          </IconButton>
          <Typography>Installing Survillence Camera</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <IconButton
            onClick={button2ClickedHandler}
            disabled={button2 && true}
          >
            {button2 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fc0a0a"
                variants={tickVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "5px", right: "5px" }}
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </motion.svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="60px"
              viewBox="0 0 24 24"
              width="60px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M14.69,2.21L4.33,11.49c-0.64,0.58-0.28,1.65,0.58,1.73L13,14l-4.85,6.76c-0.22,0.31-0.19,0.74,0.08,1.01h0 c0.3,0.3,0.77,0.31,1.08,0.02l10.36-9.28c0.64-0.58,0.28-1.65-0.58-1.73L11,10l4.85-6.76c0.22-0.31,0.19-0.74-0.08-1.01l0,0 C15.47,1.93,15,1.92,14.69,2.21z" />
                </g>
              </g>
            </svg>
          </IconButton>
          <Typography>Electrician</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <IconButton
            onClick={button3ClickedHandler}
            disabled={button3 && true}
          >
            {button3 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fc0a0a"
                variants={tickVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "5px", right: "5px" }}
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </motion.svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="60px"
              viewBox="0 0 24 24"
              width="60px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M16.56,8.94L7.62,0L6.21,1.41l2.38,2.38L3.44,8.94c-0.59,0.59-0.59,1.54,0,2.12l5.5,5.5C9.23,16.85,9.62,17,10,17 s0.77-0.15,1.06-0.44l5.5-5.5C17.15,10.48,17.15,9.53,16.56,8.94z M5.21,10L10,5.21L14.79,10H5.21z M19,11.5c0,0-2,2.17-2,3.5 c0,1.1,0.9,2,2,2s2-0.9,2-2C21,13.67,19,11.5,19,11.5z M2,20h20v4H2V20z" />
              </g>
            </svg>
          </IconButton>
          <Typography>Painter</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <IconButton
            onClick={button4ClickedHandler}
            disabled={button4 && true}
          >
            {button4 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fc0a0a"
                variants={tickVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "0.1px", right: "0.1px" }}
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </motion.svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="60px"
              viewBox="0 0 24 24"
              width="60px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M19.28,4.93l-2.12-2.12c-0.78-0.78-2.05-0.78-2.83,0L11.5,5.64l2.12,2.12l2.12-2.12l3.54,3.54 C20.45,8,20.45,6.1,19.28,4.93z" />
                  <path d="M5.49,13.77c0.59,0.59,1.54,0.59,2.12,0l2.47-2.47L7.96,9.17l-2.47,2.47C4.9,12.23,4.9,13.18,5.49,13.77L5.49,13.77z" />
                  <path d="M15.04,7.76l-0.71,0.71l-0.71,0.71l-3.18-3.18C9.85,5.4,8.9,5.4,8.32,5.99c-0.59,0.59-0.59,1.54,0,2.12l3.18,3.18 L10.79,12l-6.36,6.36c-0.78,0.78-0.78,2.05,0,2.83c0.78,0.78,2.05,0.78,2.83,0L16.45,12c0.39,0.39,1.02,0.39,1.41,0 c0.39-0.39,0.39-1.02,0-1.41L15.04,7.76z" />
                </g>
              </g>
            </svg>
          </IconButton>
          <Typography>Plumber</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <IconButton
            onClick={button5ClickedHandler}
            disabled={button5 && true}
          >
            {button5 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fc0a0a"
                variants={tickVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "0.1px", right: "0.1px" }}
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </motion.svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="60px"
              viewBox="0 0 24 24"
              width="60px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M20,7V3c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v1H4C2.9,4,2,4.9,2,6v4c0,1.1,0.9,2,2,2h8v3h-1c-0.55,0-1,0.45-1,1v6 c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-6c0-0.55-0.45-1-1-1h-1v-3c0-1.1-0.9-2-2-2H4V6h2v1c0,0.55,0.45,1,1,1h12 C19.55,8,20,7.55,20,7z M8,4h10v2H8V4z M14,21h-2v-4h2V21z" />
              </g>
            </svg>
          </IconButton>
          <Typography>WaterProof</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <IconButton
            onClick={button6ClickedHandler}
            disabled={button6 && true}
          >
            {button6 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fc0a0a"
                variants={tickVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "5px", right: "5px" }}
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </motion.svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="60px"
              viewBox="0 0 24 24"
              width="60px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M20,8h-3V6c0-1.1-0.9-2-2-2H9C7.9,4,7,4.9,7,6v2H4c-1.1,0-2,0.9-2,2v10h20V10C22,8.9,21.1,8,20,8z M9,6h6v2H9V6z M20,18H4 v-3h2v1h2v-1h8v1h2v-1h2V18z M18,13v-1h-2v1H8v-1H6v1H4v-3h3h10h3v3H18z" />
                </g>
              </g>
            </svg>
          </IconButton>
          <Typography>Handyman</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          spacing={1}
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={2}>
            <Button
              variant="contained"
              size="large"
              className={classes.submit}
              onClick={clearHandler}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
