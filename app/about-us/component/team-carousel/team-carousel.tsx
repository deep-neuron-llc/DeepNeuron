import React, { useEffect, useRef, useState } from "react";
import expertsDetails from "../../utils/experts-data";
import TeamCard from "./team-card";
import {
  Box,
  Grid,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomPaper from "@/app/components/custom-paper/custom-paper";

const TeamCarousel = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const cardsToShow = isSmallScreen ? 1 : 3;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext(false);
    }, 5000);
  };

  const handleNext = (manual = true) => {
    setDirection("left");
    setIndex((prev) =>
      prev + cardsToShow >= expertsDetails.length ? 0 : prev + cardsToShow
    );
    if (manual) startAutoSlide();
  };

  const handlePrev = (manual = true) => {
    setDirection("right");
    setIndex((prev) =>
      prev - cardsToShow < 0
        ? Math.max(expertsDetails.length - cardsToShow, 0)
        : prev - cardsToShow
    );
    if (manual) startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardsToShow]);

  const currentExperts = expertsDetails.slice(index, index + cardsToShow);

  return (
    <CustomPaper>
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
              Team
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
              <IconButton color="primary" onClick={() => handlePrev(true)}>
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
                    <TeamCard {...expert} />
                  </Grid>
                </Slide>
              ))}

              <IconButton color="primary" onClick={() => handleNext(true)}>
                <ChevronRightIcon />
              </IconButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default TeamCarousel;
