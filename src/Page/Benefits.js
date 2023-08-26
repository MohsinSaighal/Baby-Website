import React from "react";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Phone from "../assets/Phone/Phone.png";
import Layer from "../assets/Phone/Baby-farm.png";
import Tokens from "../assets/Phone/Tokens.png";
import "../assets/Styles/Benefit/Benefit.css";
import BasicCard from "./Card";

function Benefits() {
  return (
    <Stack
    id="Portfolio"
      spacing={20}
      sx={{
        maxWidth: "100%",
        height: { xs: "700vh", md: "350vh", lg: "350vh" },
        background: "#000235",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Align vertically within the grid cell
            textAlign: "center", // Center the image within the cell
            padding: "10px", // Add some padding for spacing
          }}
        >
          <img
            src={Phone}
            alt="Benefit"
            style={{
              maxWidth: "100%", // Make the image scale within its container
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Stack
            spacing={4}
            alignItems="center"
            width={{ xs: "85%", lg: "70%" }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#F39036",
                fontSize: { xs: "30px", sm: "25px", lg: "50px" },
                fontFamily: "Urbanist",
                fontWeight: "600",
                textAlign: { xs: "center" },
              }}
            >
              Invest Now in Baby Farm and Receive utility benefits
            </Typography>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                Acquire Baby Farm Tokens: First, you need to acquire Baby Farm
                tokens through the token sale event or from cryptocurrency
                exchanges that support the token.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                Set Up a Wallet: Once you have obtained Baby Farm tokens, you
                will need a compatible cryptocurrency wallet to store them
                securely. Make sure to choose a wallet that supports the Baby
                Farm token, as well as other tokens that you might own. Hardware
                wallets, software wallets, and some exchange wallets can be used
                for this purpose.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                Stake Your Tokens: To receive utility benefits from your Baby
                Farm tokens, you will need to stake them on the platform.
                Staking involves locking your tokens for a specific period
                during which you will be eligible for the utility benefits
                provided by the project. Access the staking feature on the Baby
                Farm platform and follow the instructions to lock your tokens.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                Enjoy Utility Benefits: Once you have successfully staked your
                Baby Farm tokens, you will begin to enjoy the utility benefits
                associated with the tokens.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                Utility Benefits: Token holders who stake their Baby Farm tokens
                gain access to exclusive utility benefits within the ecosystem.
                These benefits include staking rewards and up to 30% discount
                when you pay with Baby Farm tokens.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
        >
          <Stack spacing={3} width={{ xs: "400px", sm: "250px", lg: "500px" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontSize: { xs: "30px", sm: "30px", lg: "50px" },
                fontFamily: "Urbanist",
                fontWeight: "600",
                textAlign: { xs: "center" },
              }}
            >
              What Is Baby Farm <span style={{ color: "#F39036" }}>?</span>{" "}
            </Typography>
            <Typography
              paragraph
              sx={{
                fontFamily: "Urbanist",
                fontSize: { xs: "14px", lg: "20px" },
                color: "#ADA9B2",
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Baby Farm is a blockchain-based a project in the United Kingdom
              (UK) The project involves the construction of modern and
              sustainable camping side and farm to provide healthy food on our
              shops. At the core of the Baby Farm project is the introduction of
              its native utility token, known as Baby Farm token. This token
              serves as a key component of the project's ecosystem, providing
              various utilities benefits and incentives to its holders
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="image"
            src={Layer}
            alt="Layer"
            style={{ width: "80%" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Tokens} alt="Layer" style={{ width: "80%" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
        >
          <Stack spacing={1} width={"600px"}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontSize: { xs: "30px", lg: "50px" },
                fontFamily: "Urbanist",
                fontWeight: "600",
                textAlign: { xs: "center" },
              }}
            >
              BabyFarm
              <span style={{ color: "#F39036" }}> NFT </span> ?
            </Typography>
            <Stack>
              <Typography
                paragraph
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: { xs: "12px", lg: "17px" },
                  color: "#ADA9B2",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                In "BabyFarm," each NFT is a delightful work of art capturing
                the magic of infancy and the beauty of nature. Our talented
                artists have poured their hearts into every piece, ensuring that
                each baby animal comes to life with adorable charm and
                captivating details.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: { xs: "12px", lg: "17px" },
                  color: "#ADA9B2",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                With a limited number of NFTs available, owning a "BabyFarm"
                token means joining an exclusive community of art enthusiasts
                who appreciate the purity and sweetness of childhood. These NFTs
                are not just digital assets; they are cherished memories frozen
                in time, preserving the essence of innocence for generations to
                come.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: { xs: "12px", lg: "17px" },
                  color: "#ADA9B2",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                As you explore our collection, you'll encounter an enchanting
                variety of baby animals frolicking in the lush meadows,
                splashing in puddles, and experiencing the wonder of their
                surroundings. Each NFT tells a unique story, and behind every
                adorable face lies a world of imagination waiting to be
                discovered.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: { xs: "12px", lg: "17px" },
                  color: "#ADA9B2",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Whether you're a seasoned NFT collector or a newcomer to the
                digital art scene, "BabyFarm" offers a heartwarming experience
                that will resonate with the child in all of us. Immerse yourself
                in the tenderness and playfulness of our NFTs, and embrace the
                pure joy that comes from owning a piece of "BabyFarm." Welcome
                to a world of innocence and delight - a place where art and
                memories intertwine to create everlasting magic.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing={3}>
        <Typography
          style={{
            color: "white",
            fontSize: "50px",
            fontFamily: "Urbanist",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {" "}
          Our <span style={{ color: "#F39036" }}>Portfolio</span>{" "}
        </Typography>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent={"center"}
          spacing={5}
        >
          <BasicCard
            title={"Utility Benefits"}
            paragraph={
              "Token holders who stake their Baby Farm tokens gain access to exclusive utility benefits within the ecosystem. These benefits include staking rewards and up to 30% discount when you pay with Baby Farm tokens."
            }
          />
          <BasicCard
            title={"FIXED - Passive Income"}
            paragraph={
              "We offer a passive income node model for investors backed and supported by the capital protection and performance of the fund.It is a Perfect and Suitable Platform for New Investors"
            }
          />
        </Stack>
        <Stack
          maxWidth={{ xs: "100%", lg: "90%" }}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <BasicCard
            title={"Long-Term Growth"}
            paragraph={
              "Baby Farm is oriented towards generating sustainable long-term growth for its Holders.Our Long Term Project & Planning Make it Super Effective for the Enviornment "
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Benefits;
