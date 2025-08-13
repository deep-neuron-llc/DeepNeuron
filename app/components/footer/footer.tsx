import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import navigationItems from "../nav-bar/utils/navigation-data";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const explore = ["Imprint", "Privacy policy", "Press Kit", "Cookie settings"];
  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ py: 5 }}>
        <Grid size={{ xs: 12, md: 10, xl: 7 }}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid size={{ xs: 6 }}>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="flex-start"
              >
                <Box
                  component="img"
                  src="/deep-neuron-logo.svg"
                  alt="Deep Neuron Logo"
                  sx={{ height: 56 }}
                />
                <Grid size="auto">
                  <Grid container spacing={1} alignItems="center">
                    <CallIcon color="primary" />
                    <Typography>+49 (0) XXXX XXXX XXX</Typography>
                  </Grid>
                </Grid>
                <Grid size="auto">
                  <Grid container spacing={1} alignItems="center">
                    <EmailIcon color="primary" />
                  <Typography>hello@deep-neuron.com</Typography>
                </Grid>
                </Grid>
                <Grid size="auto">
                  <Typography>
                    Deep Neuron LLC
                    <br />
                    Musterfeldstraße 1
                    <br />
                    00000 Musterland
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Grid container spacing={1} justifyContent="space-evenly">
                <Grid size="grow">
                  <Grid container direction="column" spacing={2}>
                    <Typography>
                      <b>Pages</b>
                    </Typography>
                    {(
                      Object.keys(navigationItems) as Array<
                        keyof typeof navigationItems
                      >
                    ).map((item, index) => (
                      <Typography
                        key={index}
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {navigationItems[item].label}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
                <Grid size="grow">
                  <Grid container direction="column" spacing={2}>
                    <Typography>
                      <b>Solutions</b>
                    </Typography>
                    {navigationItems.solutions.children.map((item) => (
                      <Typography
                        key={item.id}
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
                <Grid size="auto">
                  <Grid container direction="column" spacing={2}>
                    <Typography>
                      <b>Explore</b>
                    </Typography>
                    {explore.map((item, index) => (
                      <Typography
                        key={index}
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
