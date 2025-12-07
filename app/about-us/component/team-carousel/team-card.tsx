import React from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface TeamCardProps {
  name: string;
  title: string;
  linkedIn: string;
  image?: string;
}

const TeamCard = ({ name, title, linkedIn, image }: TeamCardProps) => {
  return (
    <Paper 
      variant="outlined" 
      sx={{ 
        py: 3, 
        minHeight: 350,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Grid container direction="column" spacing={2} alignItems="center">
        {image ? (
          <Avatar src={image} alt={name} sx={{ height: 156, width: 156 }} />
        ) : (
          <AccountCircleIcon sx={{ fontSize: 156, color: "grey.500" }} />
        )}
        <Grid container direction="column" spacing={1} alignItems="center">
          <Typography variant="h5" align="center" sx={{ px: 2 }}>
            {name}
          </Typography>
          <Typography variant="h6">{title}</Typography>
          <IconButton
            color="primary"
            size="small"
            onClick={() => window.open(linkedIn, "_blank")}
            aria-label={`Visit ${name}'s LinkedIn profile`}
            sx={{ 
              padding: 0.5,
              '& .MuiSvgIcon-root': { fontSize: 20 }
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TeamCard;
