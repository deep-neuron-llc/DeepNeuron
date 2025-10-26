import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Box, Grid, Typography } from "@mui/material";
import { useCustomTheme } from "@/theme";

const OurPartners = () => {
  const { darkMode } = useCustomTheme();
  return (
    <CustomPaper alt>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12 }}>
          <Typography
            align="center"
            sx={{
              typography: { xs: "h3" },
              textTransform: "uppercase",
              pb: 6,
            }}
          >
            Our{" "}
            <Typography
              component="span"
              color="primary"
              sx={{
                typography: { xs: "h3" },
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
            sx={{
              height: 48,
              my: 1,
              filter: darkMode ? "brightness(2)" : undefined,
            }}
          />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default OurPartners;
