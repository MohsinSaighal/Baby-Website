import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Divider,
  Avatar,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useWeb3Modal } from "@web3modal/react";
import ProgressBar from "./Progress";
import USDT from "../assets/Phone/usdt.svg";
import { useAccount, useDisconnect } from "wagmi";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Setting the primary color to white
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // Setting the label color to white
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "white", // Setting the border color to white
          },
          "&.Mui-focused fieldset": {
            borderColor: "white", // Setting the focused border color to white
          },
          color: "white", // Setting the text color to white
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
      },
    },
  },
});

const useStyles = makeStyles(() => ({
  customButton: {
    backgroundColor: "transparent",
    color: "black",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  countdownContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "0 auto",
  },
  countdownItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  countdownValue: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  countdownLabel: {
    fontSize: "12px",
  },
  divider: {
    color: "white",
  },
}));

const WhiteTextField = ({ label, placeholder }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label={label}
        fullWidth
        variant="outlined"
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};

const PreSale = ({ targetDate }) => {
  const { open, close } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 6,
    minutes: 21,
    seconds: 15,
  });

  const openModal = () => {
    setIsShown(true);
  };
  const updateState = (isOpen) => {
    setIsShown(isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Stack
    id="Buy"
    spacing={10}
      sx={{
        height: { xs:"100vh",md: "350vh", lg: "90vh" },
        background: "#000235",
        justifyContent: "center",
        alignItems: "center",
        width:{xs:"96%"}
      }}
    >
      <Stack>
      <Typography sx={{color:"#F39036",fontFamily:"Urbanist",fontSize:{xs:"30px",lg:"50px"},fontWeight:"800"}}>Buy BabyFarm  Here</Typography>
      </Stack>
      <Stack width={{xs:"90%",lg:"30%"}}>
      <Card
        sx={{
          borderRadius: "1.3rem",
          background: `linear-gradient(90deg, black, black, black)`,
          border: "1px solid",
          borderImage:
            "linear-gradient(90deg, rgba(249, 195, 6, 0.00), rgba(249, 195, 6, 0.30),rgba(249, 195, 6, 0.00)) 1",
          marginBottom: "10px", // Add bottom margin to create space
          width:{xs:"111%"}
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div className={classes.countdownContainer}>
            <div className={classes.countdownItem}>
              <div className={classes.countdownValue}>{timeLeft.days}</div>
              <div className={classes.countdownLabel}>Days</div>
            </div>
            <div className={classes.countdownItem}>
              <div className={classes.countdownValue}>{timeLeft.hours}</div>
              <div className={classes.countdownLabel}>Hours</div>
            </div>
            <div className={classes.countdownItem}>
              <div className={classes.countdownValue}>{timeLeft.minutes}</div>
              <div className={classes.countdownLabel}>Minutes</div>
            </div>
            <div className={classes.countdownItem}>
              <div className={classes.countdownValue}>{timeLeft.seconds}</div>
              <div className={classes.countdownLabel}>Seconds</div>
            </div>
          </div>
          <Grid
            container
            justifyContent="center"
            direction="column"
            sx={{ borderRadius: "0px" }}
          >
            <Grid item>
              <ProgressBar />
            </Grid>
            <br />
            <Grid sx={{ textAlign: "center" }} spacing={3}>
              <Typography sx={{ fontFamily: "Urbanist",fontSize:{xs:"15px"} }}>
                USDT raised: $0 / $6,700,000
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Card
          sx={{
            backgroundColor: "black",
            color: "#fefefe",
            borderRadius: "0px",
          }}
        >
          <CardContent>
            <Divider variant="middle">1 Babicu = $1</Divider>
            <Divider variant="middle">Listing Price: $1</Divider>
            <Stack
              sx={{
                backgroundColor: "#444654",
                borderRadius: "5px",
                height: "30px",
                marginTop: "3px",
                padding: "4px",
                textAlign: "center",
                "@media (max-width: 500px)": {
                  fontSize: "12px", // Adjust the font size for smaller screens
                },
              }}
            >
              <Typography
                fontSize={{ xs: "0.8rem", sm: "1rem" }}
                sx={{ fontFamily: "Urbanist" }}
              >
                Buy Our Baby Farm Token Now
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center", paddingTop: "10px" }}
            >
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Buy Baby Farm in
              </Typography>
              <Button
                sx={{ borderColor: "gray", color: "white" }}
                variant="outlined"
                startIcon={<Avatar src={USDT} alt="USDT Logo" />}
              >
                USDT
              </Button>
            </Stack>
            <br />
            <Stack direction="column" spacing={2}>
              <WhiteTextField label="Amount in USDT you Pay" />
              <WhiteTextField label="Amount in BabyFarm you receive " />
              {isConnected ? (
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "#1D2226",
                      borderColor: "white",
                      color: "white",
                    },
                  }}
                  className={classes.customButton}
                  onClick={() => disconnect()}
                >
                  Buy Now!
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "#1D2226",
                      borderColor: "white",
                      color: "white",
                    },
                  }}
                  className={classes.customButton}
                  onClick={() => open()}
                >
                  Connect Wallet
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Card>
      </Stack>
    </Stack>
  );
};

export default PreSale;
