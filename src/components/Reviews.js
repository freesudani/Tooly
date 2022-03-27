import React from "react";
import { Box } from "@mui/system";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import reviewbg from "../images/jon-tyson-vVSleEYPSGY-unsplash.jpg";
import { Rating, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import P1img from "../images/28.jpg";
import P2img from "../images/68.jpg";
import P3img from "../images/94.jpg";

const useStyles = makeStyles((theme) => ({
  reviews: {
    background: `url(${reviewbg})`,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60vh",
    backgroundSize: "cover",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "100vh",
    },
  },
  review: {
    width: "20vw",
    height: "19vw",
    backdropFilter: "blur(5px)",
    background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))",
    color: "#fff",
    padding: "1rem",
    [theme.breakpoints.down("lg")]: {
      height: "22vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "23vw",
      height: "29vw",
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: "22vw",
      display: "flex",
      padding: "1rem",
    },
  },
  imageBox: {
    position: "absloute",
  },
  image: {
    borderRadius: "50%",
    width: "4rem",
    [theme.breakpoints.down("sm")]: {
      width: "3rem",
    },
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.3rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Reviews = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box className={classes.reviews}>
      <Box className={classes.review}>
        <Typography variant={MQmd ? "caption" : "OVERLINE"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          inventore minima modi earum velit et non deleniti quis voluptate
          cupiditate illo minus quaerat corporis, omnis nam, blanditiis
        </Typography>
        <Box className={classes.bottom}>
          <Box className={classes.imageBox}>
            <img src={P1img} alt="person1" className={classes.image} />
          </Box>
          <Box>
            <Typography variant={MQmd ? "body2" : "body1"}>
              Alvis Smith
            </Typography>
            <Rating
              name="read-only"
              value={3}
              readOnly
              size={MQmd ? "small" : "medium"}
            />
          </Box>
        </Box>
      </Box>
      <Box className={classes.review}>
        <Typography variant={MQmd ? "caption" : "OVERLINE"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          inventore minima modi earum velit et non deleniti quis voluptate
          cupiditate illo minus quaerat corporis, omnis nam, blanditiis
        </Typography>
        <Box className={classes.bottom}>
          <Box className={classes.imageBox}>
            <img src={P2img} alt="person1" className={classes.image} />
          </Box>
          <Box>
            <Typography variant={MQmd ? "body2" : "body1"}>
              Steve Micheal
            </Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              size={MQmd ? "small" : "medium"}
            />
          </Box>
        </Box>
      </Box>
      <Box className={classes.review}>
        <Typography variant={MQmd ? "caption" : "OVERLINE"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          inventore minima modi earum velit et non deleniti quis voluptate
          cupiditate illo minus quaerat corporis, omnis nam, blanditiis
        </Typography>
        <Box className={classes.bottom}>
          <Box className={classes.imageBox}>
            <img src={P3img} alt="person1" className={classes.image} />
          </Box>
          <Box>
            <Typography variant={MQmd ? "body2" : "body1"}>
              Chris Adams
            </Typography>
            <Rating
              name="read-only"
              value={5}
              readOnly
              size={MQmd ? "small" : "medium"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
