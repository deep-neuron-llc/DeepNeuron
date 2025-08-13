import React, { useEffect, useState } from "react";
import expertsDetails from "../../utils/experts-data";
import ExpertCard from "./expert-card";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCustomTheme } from "@/theme";

const ExpertsCarousel = () => {
  const { darkMode } = useCustomTheme();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const cardsToShow = isSmallScreen ? 1 : 3;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const handleNext = () => {
    setDirection("left");
    setIndex((prev) =>
      prev + cardsToShow >= expertsDetails.length ? 0 : prev + cardsToShow
    );
  };

  const handlePrev = () => {
    setDirection("right");
    setIndex((prev) =>
      prev - cardsToShow < 0
        ? Math.max(expertsDetails.length - cardsToShow, 0)
        : prev - cardsToShow
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsToShow]);

  const currentExperts = expertsDetails.slice(index, index + cardsToShow);

  return (
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
          <Grid container spacing={4} sx={{ px: 3 }}>
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  typography: { xs: "h3", md: "h2" },
                  textTransform: "uppercase",
                  pb: 6,
                }}
              >
                Meet our{" "}
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
                  Experts
                </Typography>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <IconButton color="primary" onClick={handlePrev}>
                    <ChevronLeftIcon />
                  </IconButton>

                  {currentExperts.map((expert) => (
                    <Slide
                      key={expert.id}
                      direction={direction}
                      in={true}
                      mountOnEnter
                      unmountOnExit
                    >
                      <Grid size="grow">
                        <ExpertCard {...expert} />
                      </Grid>
                    </Slide>
                  ))}

                  <IconButton color="primary" onClick={handleNext}>
                    <ChevronRightIcon />
                  </IconButton>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExpertsCarousel;
