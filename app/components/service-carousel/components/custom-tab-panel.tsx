import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

interface TabPanelProps {
  index: number;
  value: number;
  label: string;
  description: string;
}

const CustomTabPanel = ({
  value,
  index,
  label,
  description,
}: TabPanelProps) => {
  return (
    <div id={`full-width-tabpanel-${index}`} hidden={value !== index}>
      {value === index && (
        <Box sx={{ px: 2, py: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography variant="h4" gutterBottom>
                {label}
              </Typography>
              <Typography
                variant="h5"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Paper variant="outlined" sx={{ height: 400, p: 3 }}>
                <Typography align="center">Image to be provided</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
