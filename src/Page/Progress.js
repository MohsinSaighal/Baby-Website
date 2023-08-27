import React from "react";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";

const ProgressBar = ({raised}) => {
  const [progress, setProgress] = React.useState(0);
  const percent = (400 / 500) * 100;

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
