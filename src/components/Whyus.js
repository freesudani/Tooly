import React from "react";
import { Box, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { motion } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  whyus: {
    height: "60vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      height: "120vh",
      flexWrap: "wrap",
      paddingRight: "5rem",
      paddingLeft: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "195vh",
    },
  },

  box: {
    height: "20rem",
    width: "16rem",
    textAlign: "center",
    marginTop: "5rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      height: "15rem",
    },
  },
  icon: {
    borderRadius: "50%",
    border: "4px solid #fff",
    height: "7rem",
    width: "7rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem auto",
  },
}));

const Whyus = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box className={classes.whyus}>
      <Box className={classes.box}>
        <Box className={classes.icon}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 42 42"
            height="42px"
            viewBox="0 0 24 24"
            width="42px"
            fill="#FFFFFF"
            whileHover={{
              scale: 1.3,
            }}
          >
            <rect fill="none" height="42" width="42" />
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
            <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h5v12H1z" />
          </motion.svg>
        </Box>
        <Typography variant={MQmd ? "h6" : "h5"} color="#fff" gutterBottom>
          MAINTAINABLE SERVICE
        </Typography>
        <Typography
          variant={MQmd ? "body2" : "body1"}
          color="#fff"
          gutterBottom
        >
          No task is too small and our rates are competitive.
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Box className={classes.icon}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 42 42"
            height="42px"
            viewBox="0 0 24 24"
            width="42px"
            fill="#FFFFFF"
            whileHover={{
              scale: 1.3,
            }}
          >
            <rect fill="none" height="42" width="42" />
            <path d="M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z" />
          </motion.svg>
        </Box>
        <Typography variant={MQmd ? "h6" : "h5"} color="#fff" gutterBottom>
          SAFETY FIRST
        </Typography>
        <Typography
          variant={MQmd ? "body2" : "body1"}
          color="#fff"
          gutterBottom
        >
          We are covered by the general contractors insurance.
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Box className={classes.icon}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 42 42"
            height="42px"
            viewBox="0 0 24 24"
            width="42px"
            fill="#FFFFFF"
            whileHover={{
              scale: 1.3,
            }}
          >
            <rect fill="none" height="42" width="42" />
            <path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" />
            <circle cx="9" cy="13" r="1" />
            <circle cx="15" cy="13" r="1" />
            <path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" />
          </motion.svg>
        </Box>
        <Typography variant={MQmd ? "h6" : "h5"} color="#fff" gutterBottom>
          POST COMPLETION
        </Typography>
        <Typography
          variant={MQmd ? "body2" : "body1"}
          color="#fff"
          gutterBottom
        >
          customers who used are services will be prioritized.
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Box className={classes.icon}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 42 42"
            height="42px"
            viewBox="0 0 24 24"
            width="42px"
            fill="#FFFFFF"
            whileHover={{
              scale: 1.3,
            }}
          >
            <g>
              <rect fill="none" height="42" width="42" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M15,1H9v2h6V1z M11,14h2V8h-2V14z M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42 C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9s4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7 s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" />
                </g>
              </g>
            </g>
          </motion.svg>
        </Box>
        <Typography variant={MQmd ? "h6" : "h5"} color="#fff" gutterBottom>
          MEETING DEADLINES
        </Typography>
        <Typography
          variant={MQmd ? "body2" : "body1"}
          color="#fff"
          gutterBottom
        >
          customers are assured that sticking to a timetable is a must.
        </Typography>
      </Box>
    </Box>
  );
};

export default Whyus;
