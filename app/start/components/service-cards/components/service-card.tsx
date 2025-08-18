import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 4, borderColor: "primary.main" }}>
        <Grid container direction="column" spacing={1}>
          <Grid size="grow">
            {React.createElement(icon, {
              sx: { fontSize: 88, color: "primary.main" },
            })}
          </Grid>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default ServiceCard;
