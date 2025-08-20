import React, { useEffect, useState } from "react";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import CustomTabPanel from "./components/custom-tab-panel";
import serviceData from "./utils/service-data";
import CustomPaper from "../../../components/custom-paper/custom-paper";

interface ServiceCarouselProps {
  alt?: boolean;
}

const ServiceCarousel = ({ alt }: ServiceCarouselProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 1) % serviceData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <CustomPaper alt={alt}>
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
              textUnderlineOffset: "8px",
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
              <Tab key={service.id} icon={service.icon} label={service.label} />
            ))}
          </Tabs>
          {serviceData.map((service, index) => (
            <CustomTabPanel
              key={service.id}
              value={value}
              index={index}
              label={service.label}
              description={service.description}
              image={service.image}
            />
          ))}
        </Grid>
      </CustomPaper>
    </>
  );
};

export default ServiceCarousel;
