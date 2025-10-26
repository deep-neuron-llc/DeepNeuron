import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Grid, Typography } from "@mui/material";
import OurMissionImage from "../../../public/our-mission.json";
import Lottie from "lottie-react";

const OurMission = () => {
  return (
    <CustomPaper alt small>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Lottie
            animationData={OurMissionImage}
            loop={false}
            autoplay={true}
            style={{ height: 400 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="h6">
            Rendering cutting edge Artificial Intelligence (AI) based solution
            and learning
          </Typography>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default OurMission;
