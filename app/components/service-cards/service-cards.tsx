import React from "react";
import CustomPaper from "../custom-paper/custom-paper";
import { Grid, Typography } from "@mui/material";
import { ServiceData } from "./utils/service-card-data";
import ServiceCard from "./components/service-card";

interface ServiceCardsProps {
  alt?: boolean;
  strongTitle: string;
  title: string;
  data: ServiceData[];
}

const ServiceCards = ({ alt, strongTitle, title, data }: ServiceCardsProps) => {
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
            {strongTitle}
          </Typography>{" "}
          {title}
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {data.map((service: ServiceData) => (
            <Grid
              key={service.id}
              size={{ xs: 12, md: "grow" }}
              sx={{ display: "flex" }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Grid>
          ))}
        </Grid>
      </CustomPaper>
    </>
  );
};

export default ServiceCards;
