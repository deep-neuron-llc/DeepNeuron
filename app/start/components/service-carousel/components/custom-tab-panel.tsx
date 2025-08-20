import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";

interface TabPanelProps {
  index: number;
  value: number;
  label: string;
  description: string;
  image: object;
}

const CustomTabPanel = ({
  value,
  index,
  label,
  description,
  image,
}: TabPanelProps) => {
  return (
    <div id={`full-width-tabpanel-${index}`} hidden={value !== index}>
      {value === index && (
        <Box sx={{ px: 2, py: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" gutterBottom>
                {label}
              </Typography>
              <Typography
                variant="h6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "grid" } }}>
              <Lottie
                animationData={image}
                loop={true}
                autoplay={true}
                style={{ height: 400 }}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
