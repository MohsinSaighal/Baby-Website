import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



export default function BasicCard({title,paragraph}) {
  return (
    <Card sx={{ maxWidth: {xs:"100%",sm:"60%",lg:"35%"},background:"#130D1B",borderRadius:"10px" }}>
      <CardContent >
        <Typography variant="h5" component="div" sx={{color:"white",fontFamily:"Urbanist",fontWeight:"800",fontSize:"25px",textAlign:{xs:'center'}}}>
         {title}
        </Typography>
        <Typography paragraph sx={{color:"white",fontFamily:"Urbanist",fontSize:"17px",textAlign:{xs:'center'}}}>
        {paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
}
