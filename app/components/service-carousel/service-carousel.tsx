import React, { useEffect, useState } from "react";
import { useCustomTheme } from "@/theme";
import { Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import CustomTabPanel from "./components/custom-tab-panel";
import serviceData from "./utils/service-data";

const ServiceCarousel = () => {
  const { darkMode } = useCustomTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 1) % serviceData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          py: 10,
          background: darkMode
            ? "linear-gradient(to bottom, #1A232E 0%, #121212 100%)"
            : undefined,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid size={{ xs: 12, md: 10, xl: 7 }} sx={{ p: 1 }}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                typography: { xs: "h3", md: "h2" },
                textTransform: "uppercase",
                pb: 6,
              }}
            >
              We provide{" "}
              <Typography
                component="span"
                color="primary"
                sx={{
                  typography: { xs: "h3", md: "h2" },
                  textDecoration: "underline",
                  textUnderlineOffset: "16px",
                  color: "primary.main",
                }}
              >
                services
              </Typography>{" "}
              for
            </Typography>
            <Grid container justifyContent="center">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={{ overflowX: "hidden" }}
              >
                {serviceData.map((service) => (
                  <Tab
                    key={service.id}
                    icon={service.icon}
                    label={service.label}
                  />
                ))}
              </Tabs>
              {serviceData.map((service, index) => (
                <CustomTabPanel
                  key={service.id}
                  value={value}
                  index={index}
                  label={service.label}
                  description={service.description}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ServiceCarousel;
