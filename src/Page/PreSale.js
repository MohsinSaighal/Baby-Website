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
import PreSaleAbi from "../components/Contracts/PreSale.json";
import presaleAddress from "../components/Contracts/PreSaleAddress.json";
import USDTAbi from "../components/Contracts/USDT.json";
import USDTAddress from "../components/Contracts/USDTAddress.json";
import { ethers } from "ethers";

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
  const [amountRaised, setAmountRaised] = useState();
  const [input, setInput] = useState(0);
  const [expected, setExpected] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const openModal = () => {
    setIsShown(true);
  };
  const updateState = (isOpen) => {
    setIsShown(isOpen);
  };

  const getValue = (e) => {
    setInput(e.target.value);
    getExpectedPrice();
  };

  const getTokenPrice = async () => {
    try {
      const providers = new ethers.getDefaultProvider(
        "https://bsc-dataseed1.binance.org/"
      );

      const contract = new ethers.Contract(
        presaleAddress.address,
        PreSaleAbi,
        providers
      );
      const decimals = 1000000000000000000;
      const presalePrice = await contract.getRate();
      console.log(presalePrice.toString());
      setTokenPrice(presalePrice.toString() / decimals);
    } catch (error) {
      console.log(error);
    }
  };

  const getAmountRaised = async () => {
    try {
      const providers = new ethers.getDefaultProvider(
        "https://bsc-dataseed1.binance.org/"
      );

      const contract = new ethers.Contract(
        presaleAddress.address,
        PreSaleAbi,
        providers
      );
      const presalePrice = await contract.weiRaised();
      setAmountRaised(presalePrice.toString());
    } catch (error) {
      console.log(error);
    }
  };
  const getTime = async () => {
    try {
      const providers = new ethers.getDefaultProvider(
        "https://bsc-dataseed1.binance.org/"
      );

      const contract = new ethers.Contract(
        presaleAddress.address,
        PreSaleAbi,
        providers
      );

      const blockchainUnixTimestamp = await contract.getEndTime();

      const currentUnixTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
      const timeDifference = blockchainUnixTimestamp - currentUnixTimestamp;

      if (timeDifference <= 0) {
        console.log("Time has exceeded the blockchain time.");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (24 * 60 * 60));
        const hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((timeDifference % 3600) / 60);
        const seconds = timeDifference % 60;

        console.log("Time Difference:");
        console.log(
          `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
        );
        setTimeLeft({ days, hours, minutes, seconds });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buy = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const Signer = await provider.getSigner();
      const contract = new ethers.Contract(
        presaleAddress.address,
        PreSaleAbi,
        Signer
      );
      const USDT = new ethers.Contract(USDTAddress.address, USDTAbi, Signer);
      await USDT.approve(
        presaleAddress.address,
        ethers.utils.parseEther(input.toString())
      );
      await (await contract.buyTokens(input)).wait();
    } catch (error) {
      console.log(error);
    }
  };

  const getExpectedPrice = async () => {
    const initialValue = tokenPrice * input;
    const deduction = initialValue * 0.05;
    const finalValue = initialValue - deduction;
    setExpected(finalValue);
    console.log(finalValue);
  };

  useEffect(() => {
    getAmountRaised();
    setInterval(() => {
      getTime();
    }, 1000);

    getTokenPrice();
  }, []);
  const deductionAmount = tokenPrice * input * 0.05;
  const restAmount = tokenPrice * input - deductionAmount;

  return (
    <Stack
      id="Buy"
      spacing={10}
      sx={{
        height: { xs: "100vh", md: "350vh", lg: "90vh" },
        background: "#000235",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "96%" },
      }}
    >
      <Stack>
        <Typography
          sx={{
            color: "#F39036",
            fontFamily: "Urbanist",
            fontSize: { xs: "30px", lg: "50px" },
            fontWeight: "800",
          }}
        >
          Buy BabyFarm Here
        </Typography>
      </Stack>
      <Stack width={{ xs: "90%", lg: "30%" }}>
        <Card
          sx={{
            borderRadius: "1.3rem",
            background: `linear-gradient(90deg, black, black, black)`,
            border: "1px solid",
            borderImage:
              "linear-gradient(90deg, rgba(249, 195, 6, 0.00), rgba(249, 195, 6, 0.30),rgba(249, 195, 6, 0.00)) 1",
            marginBottom: "10px", // Add bottom margin to create space
            width: { xs: "111%" },
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
                <ProgressBar raised={amountRaised / 1000000000000000000} />
              </Grid>
              <br />
              <Grid sx={{ textAlign: "center" }} spacing={3}>
                <Typography
                  sx={{ fontFamily: "Urbanist", fontSize: { xs: "15px" } }}
                >
                  Stage 1 of PreSale<br></br>
                  USDT raised: ${amountRaised / 1000000000000000000} /
                  $10,000,000
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
              <Divider variant="middle">1 BabyFarm = ${tokenPrice}</Divider>
              <Divider variant="middle">Listing Price: $5</Divider>
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
                <ThemeProvider theme={theme}>
                  <TextField
                    label={"Amount in USDT you Pay"}
                    fullWidth
                    variant="outlined"
                    onChange={(e) => getValue(e)}
                  />
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Typography>Amount in Baby Farm You Receive</Typography>
                  <TextField
                    placeholder={restAmount}
                    value={restAmount}
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true, // Make the input read-only
                    }}
                  />
                </ThemeProvider>
                {isConnected ? (
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      backgroundColor: "#1D2226",
                      borderColor: "white",
                      "&:hover": {
                        backgroundColor: "#1D2226",
                        borderColor: "white",
                        color: "white",
                      },
                    }}
                    className={classes.customButton}
                    onClick={() => buy()}
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
