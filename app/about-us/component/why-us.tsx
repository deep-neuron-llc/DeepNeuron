import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Grid, Paper, Typography } from "@mui/material";
import WhyUsImage from "../../../public/why-us.json";
import Lottie from "lottie-react";

const WhyUs = () => {
  return (
    <CustomPaper small>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Typography variant="h4" gutterBottom>
            Why Us?
          </Typography>
          <Typography variant="h6">Some text</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Lottie
            animationData={WhyUsImage}
            loop={false}
            autoplay={true}
            style={{ height: 400 }}
          />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default WhyUs;
