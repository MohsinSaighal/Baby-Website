import React from "react";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Tokenomics from "../assets/Tokenomics/Other 06.svg";
import "../assets/Styles/Benefit/Benefit.css";
import { PieChart } from "@mui/x-charts/PieChart";

function Tokenomic() {
  const data2 = [
    { label: "Buy Tax", value: 5, color: "#8A75E2" },
    { label: "Sell Tax", value: 5, color: "#E275CA" },
    { label: "PreSale", value: 20, color: "#E7C369" },
    { label: "Reserved Token", value: 10, color: "#E28975" },
    { label: "Liquidity Pool", value: 70, color: "#DEE062" },
  ];
  return (
    <Stack
    id="Tokenomics"
      spacing={20}
      sx={{
        maxWidth: "100%",
        height: { xs: "180vh", lg: "180vh" },
        background: "#000235",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography className="animated-typography" variant="h6">
        Our Tokenomics
      </Typography>
      <Grid container spacing={2} width={"fit-content"}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={Tokenomics} alt="Benefit" />
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Stack
            spacing={4}
            alignItems="center"
            width={{ xs: "100%", lg: "70%" }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#F39036",
                fontSize: { xs: "30px", lg: "50px" },
                fontFamily: "Urbanist",
                fontWeight: "600",
              }}
            >
              Baby Farm Tokenomics
            </Typography>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", lg: "16px" },
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                🌱 Liquidity Generation: Baby Farm employs a unique liquidity
                generation mechanism that ensures a stable trading environment.
                A portion of each transaction is automatically allocated to the
                liquidity pool, bolstering the token's stability and reducing
                volatility. This innovative approach safeguards investors
                against sudden price fluctuations, fostering a sense of trust
                and confidence in the token
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", lg: "16px" },
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                👨‍🌾 Yield Farming Redefined: Yield farming has never been this
                rewarding and sustainable. With Baby Farm, holders are
                incentivized to participate in yield farming by earning BFARM
                tokens directly. Our deflationary model progressively reduces
                the supply of BFARM tokens over time, naturally driving up
                demand and contributing to potential price appreciation.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", lg: "16px" },
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "80%",
                }}
              >
                🤝 Community-Centric Approach: At the heart of Baby Farm is a
                vibrant and engaged community. Our tokenomics have been
                meticulously crafted to ensure that every member has a voice and
                a stake in the project's development. Regular governance votes
                allow holders to shape the future direction of Baby Farm,
                fostering a sense of inclusivity and shared ownership.
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", lg: "16px" },
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                🔥 Automatic Burning Mechanism: Baby Farm embraces scarcity with
                an automatic burning mechanism. A percentage of tokens from
                every transaction is irrevocably burned, systematically reducing
                the total supply. This elegant deflationary feature not only
                creates scarcity but also rewards long-term holders, encouraging
                a commitment to the project's success
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <span className="divider"></span>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", lg: "16px" },
                  fontFamily: "Urbanist",
                  fontWeight: "300",
                  display: "flex",
                  width: "100%",
                }}
              >
                🚀 Gradual Reward Distribution: Unlike traditional projects,
                Baby Farm avoids sudden, unsustainable token releases. Instead,
                the rewards are distributed gradually, creating a steady influx
                of tokens into the ecosystem. This measured approach ensures
                that the market isn't flooded, maintaining a healthier growth
                trajectory.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* <Grid
      item
      xs={18}
      sm={6}
      className="responsive-grid"
    >
      <PieChart
        series={[
          {
            data: data2,
            cx: 500,
            cy: 200,
            innerRadius: 120,
            outerRadius: 170,
          },
        ]}
        height={500}
        legend={{ hidden: true }}
        className="responsive-pie-chart"
      />
    </Grid> */}

        {/* <Stack
          display={"flex"}
          direction={"column"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          marginBottom={"6%"}
          marginLeft={{xs:"160px"}}
        >
         <Stack direction={"row"}   className="responsive-stack">
            <Stack
              class="h-[20px] md:h-[25px] w-[20px] md:w-[25px] rounded-full"
              style={{
                backgroundColor: " rgb(226, 117, 202)",
                height: {xs:"20px",lg:"30px"},
                width: {xs:"20px",lg:"30px"},
                borderRadius: "1000px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            ></Stack>
            <Stack marginLeft={"20px"}  spacing={{xs:10,lg:30}} direction={"row"}>
              <Typography
                variant="h6"
                sx={{ color: "white", fontFamily: "Urbanist",fontSize:{xs:"12px"} }}
              >
                Sell Tax
              </Typography>
              <div style={{ flexGrow: 1, textAlign: "right" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "Urbanist" ,fontSize:{xs:"12px"}}}
                >
                  5%
                </Typography>
              </div>
            </Stack>
          </Stack>
          <Stack direction={"row"}   className="responsive-stack">
            <Stack
              class="h-[20px] md:h-[25px] w-[20px] md:w-[25px] rounded-full"
              sx={{
                backgroundColor: " rgb(226, 117, 202)",
                height: {xs:"20px",lg:"30px"},
                width: {xs:"20px",lg:"30px"},
                borderRadius: "1000px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            ></Stack>
            <Stack marginLeft={"20px"}  spacing={{xs:10,lg:30}} direction={"row"}>
              <Typography
                variant="h6"
                sx={{ color: "white", fontFamily: "Urbanist",fontSize:{xs:"12px"} }}
              >
                Sell Tax
              </Typography>
              <div style={{ flexGrow: 1, textAlign: "right" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "Urbanist" ,fontSize:{xs:"12px"}}}
                >
                  5%
                </Typography>
              </div>
            </Stack>
          </Stack>
          <Stack direction={"row"}   className="responsive-stack">
            <Stack
              class="h-[20px] md:h-[25px] w-[20px] md:w-[25px] rounded-full"
              sx={{
                backgroundColor: " rgb(231, 195, 105)",
                height: {xs:"20px",lg:"30px"},
                width: {xs:"20px",lg:"30px"},
                borderRadius: "1000px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            ></Stack>
            <Stack marginLeft={"20px"} direction={"row"}  spacing={{xs:10,lg:30}}>
              <Typography
                variant="h6"
                sx={{ color: "white", fontFamily: "Urbanist" ,fontSize:{xs:"12px"}}}
              >
                Pre Sale
              </Typography>
              <div style={{ flexGrow: 1, textAlign: "right" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "Urbanist",fontSize:{xs:"12px"} }}
                >
                  5%
                </Typography>
              </div>
            </Stack>
          </Stack>
          <Stack direction={"row"}   className="responsive-stack">
            <Stack
              sx={{
                backgroundColor: " rgb(226, 137, 117)",
                height: {xs:"20px",lg:"30px"},
                width: {xs:"20px",lg:"30px"},
                borderRadius: "1000px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            ></Stack>
            <Stack marginLeft={"20px"} direction={"row"}  spacing={{xs:10,lg:30}}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Urbanist",
                  textAlign: "left",
                  fontSize:{xs:"12px"}
                }}
              >
                Reserve
              </Typography>
              <div style={{ flexGrow: 1, textAlign: "right" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "Urbanist",fontSize:{xs:"12px"} }}
                >
                  5%
                </Typography>
              </div>
            </Stack>
          </Stack>
          <Stack direction={"row"}   className="responsive-stack">
            <Stack
              sx={{
                backgroundColor: " #DEE062",
                height: {xs:"20px",lg:"30px"},
                width: {xs:"20px",lg:"30px"},
                borderRadius: "1000px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            ></Stack>
            <Stack marginLeft={"20px"} direction={"row"} spacing={{xs:10,lg:30}}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Urbanist",
                  textAlign: "left",
                  fontSize:{xs:"12px"}
                }}
              >
                Liquidity
              </Typography>
              <div style={{ flexGrow: 1, textAlign: "right" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "Urbanist",fontSize:{xs:"12px"} }}
                >
                  5%
                </Typography>
              </div>
            </Stack>
          </Stack>
        </Stack> */}
      </Grid>
    </Stack>
  );
}

export default Tokenomic;
