import React, { useEffect } from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import PreSaleAbi from "../components/Contracts/PreSale.json";
import presaleAddress from "../components/Contracts/PreSaleAddress.json";
import { ethers } from "ethers";

const ProgressBar = ({ raised }) => {
  const [progress, setProgress] = React.useState(0);
  const [percent, setPercent] = React.useState(0);

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
      const toEther = presalePrice / 1000000000000000000;
      setPercent((toEther / 1000000) * 100);
      setProgress(percent);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAmountRaised();
  }, []);

  return (
    <LinearProgress
      determinate
      size="sm"
      thickness={20}
      value={percent}
      sx={{
        "--LinearProgress-radius": "22px",
        "--LinearProgress-progressThickness": "22px",
        backgroundColor: "#2A3343",
        color: "#F9C306",
        boxShadow: "sm",
      }}
    >
      <Typography
        level="body3"
        fontWeight="xl"
        v
        textColor="neutral.500"
        sx={{ mixBlendMode: "difference" }}
      >
        {`${Math.round(progress)}%`}
      </Typography>
    </LinearProgress>
  );
};

export default ProgressBar;
