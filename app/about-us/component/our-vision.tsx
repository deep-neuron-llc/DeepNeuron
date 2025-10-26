import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Grid, Paper, Typography } from "@mui/material";
import OurVisionImage from "../../../public/our-vision.json";
import Lottie from "lottie-react";

const OurVision = () => {
  return (
    <CustomPaper small>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Typography variant="h4" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="h6">
            Rendering cutting edge Artificial Intelligence (AI) based solution
            and learning
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Lottie
            animationData={OurVisionImage}
            loop={false}
            autoplay={true}
            style={{ height: 400 }}
          />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default OurVision;
