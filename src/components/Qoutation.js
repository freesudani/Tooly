import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { useSelector } from "react-redux";
import { Button, Divider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useTheme, useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: 500,
      transform: "translate(-55%, -50%)",
    },
  },

  qouteheader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  qoutedetail: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },

  address: {
    textAlign: "left",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "1rem",
    paddingLeft: "1rem",
  },

  totalprice: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    textTransform: "uppercase",
  },
  print: {
    textAlign: "center",
    padding: "1rem",
  },
}));

const Qoutation = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const MQsm = useMediaQuery(theme.breakpoints.down("sm")); //600px
  const cartItems = useSelector((state) => state.cart.qoutations);
  const totalprice = cartItems.reduce((sum, number) => {
    const updatedSum = sum + number.price;
    return updatedSum;
  }, 0);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box className={classes.style}>
            <Box className={classes.qouteheader}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="34px"
                viewBox="0 0 24 24"
                width="34px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
              <Typography variant="h4">Tooly</Typography>
            </Box>
            <Box className={classes.qoutedetail}>
              <Box className={classes.qouteNumber}>
                <Typography variant="caption">
                  Qoute no: <br />
                </Typography>
                <Typography variant="caption">
                  {uuidv4()} <br />
                </Typography>
                <Typography variant="caption">
                  {new Date().toISOString().slice(0, 10)}
                </Typography>
              </Box>
              <Box classNaeme={classes.address}>
                <Typography variant="caption">
                  you can send qoute to: <br />
                </Typography>
                <Typography variant="caption" style={{ textAlign: "left" }}>
                  13453 soi street {MQsm && <br />}Unit 185 blake, AJ AHf 74G
                  <br />
                </Typography>
                <Typography variant="caption" style={{ textAlign: "left" }}>
                  or Email at:
                  <br />
                </Typography>
                <Typography variant="caption" style={{ textAlign: "left" }}>
                  CustomerCare@tooly.com
                </Typography>
              </Box>
            </Box>
            {cartItems.map((item, index) => {
              return (
                <Box key={index}>
                  <Box className={classes.item}>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.price}$</Typography>
                  </Box>
                  <Divider />
                </Box>
              );
            })}
            <Divider />
            <Box className={classes.totalprice}>
              <Typography>Total Price</Typography>
              <Typography color="error" bold>
                {totalprice}$
              </Typography>
            </Box>
            <Box className={classes.print}>
              <Button
                variant="contained"
                size="large"
                onClick={() => console.log("Printing...")}
              >
                Print
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Qoutation;
