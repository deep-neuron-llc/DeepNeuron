import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Grid, Paper, Typography } from "@mui/material";

const OurMotivation = () => {
  return (
    <CustomPaper alt>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Paper variant="outlined" sx={{ minHeight: 500, p: 3 }}>
            <Typography align="center">Image to be added</Typography>
          </Paper>
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

export default OurMotivation;
