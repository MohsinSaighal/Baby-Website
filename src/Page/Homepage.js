import { Stack, Grid, Typography, Button } from "@mui/material";
import React from "react";
import CoinImage from "../assets/Hero/coin image in top.svg";
import { Link as LinkR } from "react-scroll";

const Homepage = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const typographyStyle = {
    color: "#FFF",
    fontFamily: "Outfit",
    fontSize: { xs: "30px", sm: "80px", lg: "80px" },
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "100%",
  };
  return (
    <Stack id="Home" spacing={2}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={17}
          sm={6}
          sx={{
            padding: {
              xs: "0px 0px 0px 2px !important",
              sm: "14px 0px 0px 7px !important",
              lg: "140px 0px 0px 195px !important",
            },
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h4" gutterBottom sx={typographyStyle}>
              Babyfarm is a unique project in cryptocurrency market
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Outfit",
                fontSize: { xs: "20px", sm: "15px", lg: "20px" },
                fontWeight: "500",
                color: "white",
              }}
            >
              Baby Farm Token is a BEP-20 token that has been deployed on the
              Binance Smart Chain (BSC). As a BEP-20 token, it adheres to the
              Binance Smart Chain's token standard and is compatible with BSC's
              decentralized applications and ecosystem.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Outfit",
                fontSize: { xs: "20px", sm: "15px", lg: "20px" },
                fontWeight: "500",
                color: "white",
              }}
            >
              Babyfarm is a unique project in cryptocurrency market based on the
              combination between farming and camping sites.
            </Typography>
            <Stack direction={"row"} spacing={3}>
              <Button
                variant="contained"
                sx={{
                  background: "#F39036",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "800",
                  borderRadius: "31px",
                  color: "white",
                  width: "fit-content",
                  height: "5vh",
                  "&:hover": {
                    background: "#F39036", // Set the same background color as normal state
                  },
                }}
              >
                White Paper
              </Button>

              <Button
                variant="contained"
                sx={{
                  background: "#F39036",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "800",
                  borderRadius: "31px",
                  color: "white",
                  width: "fit-content",
                  height: "5vh",
                  "&:hover": {
                    background: "#F39036", // Set the same background color as normal state
                  },
                }}
              >
                <LinkR to="Buy" smooth={true} duration={50} offset={-50}>
                  Buy BabyFarm
                </LinkR>
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={10} sm={6}>
          <img
            src={CoinImage}
            alt="CoinImage"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Homepage;
