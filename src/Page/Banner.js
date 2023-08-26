import React from "react";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

function Banner() {
  return (
    <Stack
      direction={"row"}
      sx={{
        background: "#000235",
        width: { xs: "100%", sm: "175%",lg:"100%" },
        height: { xs: "60vh", lg: "30vh" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Stack alignItems={"center"}>
            <Typography
              variant="paragraph"
              sx={{
                color: "#FFFF",
                fontSize: { xs: "25px", sm: "20px", lg: "35px" },
                fontFamily: "Urbanist",
                fontWeight: "600",
                maxWidth: "400px",
              }}
            >
              The investment objectives of Baby Farm Crypto are Regulated Fund
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={5} alignItems="center">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#FFFF",
                  fontSize:"40px",
                  fontWeight: "bold",
                  marginRight: "50px",
                }}
              >
                10+
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFF",
                  fontSize: "18px",
                  fontFamily: "Urbanist",
                  fontWeight: "600",
                  width: { xs: "70%", sm: "70%", lg: "45%" },
                }}
              >
                Baby Farm Crypto is a cutting-edge investment opportunity for
                those looking to gain exposure to both traditional
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#FFFF",
                  fontSize: "40px",
                  fontWeight: "bold",
                  marginRight: "50px",
                }}
              >
                50+
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFF",
                  fontSize: "18px",
                  fontFamily: "Urbanist",
                  fontWeight: "600",
                  width: { xs: "70%", sm: "70%", lg: "45%" },
                }}
              >
                Baby Farm Crypto is a cutting-edge investment opportunity for
                those looking to gain exposure to both traditional
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Banner;
