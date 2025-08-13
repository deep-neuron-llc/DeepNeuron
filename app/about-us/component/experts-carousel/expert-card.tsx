import React from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface ExpertsProp {
  name: string;
  linkedIn: string;
}

const ExpertCard = ({ name, linkedIn }: ExpertsProp) => {
  return (
    <Paper variant="outlined" sx={{ py: 3 }}>
      <Grid container direction="column" spacing={2} alignItems="center">
        <Avatar sx={{ height: 156, width: 156 }} />
        <Grid container direction="column" spacing={1} alignItems="center">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">Title</Typography>
          <IconButton
            color="primary"
            onClick={() => window.open(linkedIn, "_blank")}
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExpertCard;
