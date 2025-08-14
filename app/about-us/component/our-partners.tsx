import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Box, Grid, Paper, Typography } from "@mui/material";

const OurPartners = () => {
  return (
    <CustomPaper alt>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              typography: { xs: "h3", md: "h2" },
              textTransform: "uppercase",
              pb: 6,
            }}
          >
            Our{" "}
            <Typography
              component="span"
              color="primary"
              sx={{
                typography: { xs: "h3", md: "h2" },
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                color: "primary.main",
              }}
            >
              Partner
            </Typography>
          </Typography>
        </Grid>
        <Grid size="auto">
          <Box
            component="img"
            src="/partner-analytics-creator.svg"
            alt="Deep Neuron Logo"
            sx={{ height: 48, my: 1, filter: "brightness(2)" }}
          />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default OurPartners;
