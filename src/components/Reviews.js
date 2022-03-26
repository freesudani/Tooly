import React from "react";
import { Box } from "@mui/system";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import reviewbg from "../images/jon-tyson-vVSleEYPSGY-unsplash.jpg";
import { Rating, Typography } from "@mui/material";
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
  },
  review: {
    width: "20vw",
    height: "19vw",
    backdropFilter: "blur(5px)",
    background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))",
    color: "#fff",
    padding: "1rem",
  },
  imageBox: {
    position: "absloute",
  },
  image: {
    borderRadius: "50%",
    width: "4rem",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.3rem",
  },
}));

const Reviews = () => {
  const classes = useStyles();
  return (
    <Box className={classes.reviews}>
      <Box className={classes.review}>
        <Typography variant="OVERLINE">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          inventore minima modi earum velit et non deleniti quis voluptate
          cupiditate illo minus quaerat corporis, omnis nam, blanditiis
        </Typography>
        <Box className={classes.bottom}>
          <Box className={classes.imageBox}>
            <img src={P1img} alt="person1" className={classes.image} />
          </Box>
          <Box>
            <Typography>Alvis Smith</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Box>
      </Box>
      <Box className={classes.review}>
        <Typography variant="OVERLINE">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          inventore minima modi earum velit et non deleniti quis voluptate
          cupiditate illo minus quaerat corporis, omnis nam, blanditiis
        </Typography>
        <Box className={classes.bottom}>
          <Box className={classes.imageBox}>
            <img src={P2img} alt="person1" className={classes.image} />
          </Box>
          <Box>
            <Typography>Steieve Micheal</Typography>
            <Rating name="read-only" value={3.5} readOnly />
          </Box>
        </Box>
      </Box>
      <Box className={classes.review}>
        <Typography variant="OVERLINE">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          inventore minima modi earum velit et non deleniti quis voluptate
          cupiditate illo minus quaerat corporis, omnis nam, blanditiis
        </Typography>
        <Box className={classes.bottom}>
          <Box className={classes.imageBox}>
            <img src={P3img} alt="person1" className={classes.image} />
          </Box>
          <Box>
            <Typography>Chris Adams</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
