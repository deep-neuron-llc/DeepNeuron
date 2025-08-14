import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Grid, Paper, Typography } from "@mui/material";

const WhyUs = () => {
  return (
    <CustomPaper>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Typography variant="h4" gutterBottom>
            Why Us?
          </Typography>
          <Typography variant="h6">
            Some text
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: "grow" }}>
          <Paper variant="outlined" sx={{ minHeight: 500, p: 3 }}>
            <Typography align="center">Image to be added</Typography>
          </Paper>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default WhyUs;
