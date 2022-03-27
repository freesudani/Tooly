import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { motion } from "framer-motion";
import { lineVariant } from "../animations/Variants";
import { useTheme, useMediaQuery } from "@mui/material";
import headerbg from "../images/jeshoots-com-VdOO4_HFTWM-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    background: `url(${headerbg})`,
    height: "100vh",
    backgroundSize: "cover",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
      height: "80vh",
    },
    [theme.breakpoints.down("mobile")]: {
      height: "100vh",
    },
  },
  headertext: {
    width: "40vw",
    height: "50vw",
    marginLeft: "38rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
    backdropFilter: "blur(3px)",
    [theme.breakpoints.down("md")]: {
      width: "55vw",
      marginLeft: "20rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100%",
      padding: "4.5rem",

      marginLeft: "0",
    },
  },

  text1: {
    textTransform: "uppercase",
  },
  text2: {
    textTransform: "uppercase",
  },
  divider: {
    marginBottom: "1.5rem",
    marginLeft: "-0.05rem",
    borderBottomWidth: "5",
    width: "25vw",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box className={classes.header}>
      <Box
        className={classes.headertext}
        component={motion.div}
        variants={lineVariant}
        initial="hidden"
        animate="visible"
      >
        <Typography
          variant={MQmd ? "h5" : "h4"}
          fontWeight="700"
          color="grey"
          gutterBottom
          className={classes.text1}
        >
          Looking for renovators ?
        </Typography>
        <Typography
          variant={MQmd ? "h3" : "h2"}
          fontWeight="700"
          color="grey"
          gutterBottom
          className={classes.text2}
        >
          with knowledge and experience
        </Typography>
        <Divider
          variant="middle"
          textAlign="left"
          className={classes.divider}
          sx={{ borderBottomWidth: 10 }}
        />
        <Typography
          variant={MQmd ? "h6" : "h5"}
          fontWeight="700"
          color="grey"
          gutterBottom
        >
          We have built a reputation of being honest and dependable home
          improvement contractors
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
