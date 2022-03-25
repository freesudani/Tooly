import React from "react";
import { Typography, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import locationbg from "../images/barn-images-t5YUoHW6zRo-unsplash.jpg";
import map from "../images/map.png";

const useStyles = makeStyles((theme) => ({
  location: {
    background: `url(${locationbg})`,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "90vh",
    backgroundSize: "cover",
    padding: "1rem",
  },

  text: {
    width: "30vw",
    hegith: "50vw",
    marginLeft: "5rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
    backdropFilter: "blur(5px)",
    background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))",
    color: "#fff",
  },
  map: {
    height: "25rem",
  },
}));

const Location = () => {
  const classes = useStyles();
  return (
    <Box className={classes.location}>
      <Box className={classes.text}>
        <Typography variant="h4">Serving Blake City</Typography>
        <Typography gutterBottom>
          13453 soi street <br />
          Unit 185 blake,
          <br /> AJ AHf 74G
        </Typography>
        <Typography variant="h4">Working Hours</Typography>
        <Typography>Mon - Fri 9:00 am - 5:00 pm</Typography>
        <Typography>Sat - Sun closed</Typography>
      </Box>
      <Box>
        <img src={map} alt="map" className={classes.map} />
      </Box>
    </Box>
  );
};

export default Location;
