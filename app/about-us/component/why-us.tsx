"use client";

import React from "react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import { Grid, Typography, Box } from "@mui/material";
import WhyUsImage from "../../../public/why-us.json";
import Lottie from "lottie-react";

const WhyUs = () => {
  const setsUsApart = [
    {
      title: "End-to-End Expertise",
      description:
        "From data engineering to production MLOps and cloud deployment, we cover the full lifecycle.",
    },
    {
      title: "Industry-proven Solutions",
      description:
        "Delivered measurable value across healthcare, finance, retail, manufacturing, and logistics.",
    },
    {
      title: "Scalable & Sustainable",
      description:
        "Solutions designed to grow with your data, business, and future demands.",
    },
    {
      title: "Fast Time to Value",
      description:
        "Deep expertise and streamlined processes get you from idea to impact quickly.",
    },
    {
      title: "Tailored to Your Context",
      description:
        "We align to your goals and data landscape, not the other way around.",
    },
    {
      title: "Learning & Capacity Building",
      description:
        "We upskill your teams so your capability grows, not just your systems.",
    },

  ];

  const whatYouGain = [
    "A clear AI strategy aligned to your business priorities.",
    "Robust, scalable data foundations.",
    "Models and solutions that integrate cleanly into your workflows.",
    "Ongoing operational support, governance, and optimisation.",
    "Transparent ROI with measurable impact and continuous improvement.",
  ];

  return (
    <CustomPaper small>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container direction="column" spacing={2}>
            <Typography variant="h4" gutterBottom>
              Why Us?
            </Typography>

            <Typography variant="h6" gutterBottom>
              Your strategic AI &amp; data partner
            </Typography>

            <Typography variant="body1">
              At Deep Neuron, we don&apos; just build models — we help you
              leverage AI and data in a way that directly drives business
              outcomes.
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
              What sets us apart
            </Typography>

            {setsUsApart.map((item, index) => (
              <Typography variant="body1" key={index}>
                <b>{item.title}</b> — {item.description}
              </Typography>
            ))}

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
              What you gain
            </Typography>

            {whatYouGain.map((item, index) => (
              <Typography variant="body1" key={index}>
                • {item}
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Lottie
              animationData={WhyUsImage}
              loop={true}
              autoplay={true}
              style={{ width: "100%", maxWidth: 400, height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default WhyUs;
