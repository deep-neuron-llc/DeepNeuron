import React, { useCallback, useEffect, useRef, useState } from "react";
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

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection("left");
      setIndex((prev) =>
        prev + cardsToShow >= expertsDetails.length ? 0 : prev + cardsToShow
      );
    }, 5000);
  }, [cardsToShow]);

  const handleNext = useCallback(
    (manual = true) => {
      setDirection("left");
      setIndex((prev) =>
        prev + cardsToShow >= expertsDetails.length ? 0 : prev + cardsToShow
      );
      if (manual) startAutoSlide();
    },
    [cardsToShow, startAutoSlide]
  );

  const handlePrev = useCallback(
    (manual = true) => {
      setDirection("right");
      setIndex((prev) =>
        prev - cardsToShow < 0
          ? Math.max(expertsDetails.length - cardsToShow, 0)
          : prev - cardsToShow
      );
      if (manual) startAutoSlide();
    },
    [cardsToShow, startAutoSlide]
  );

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardsToShow, startAutoSlide]);

  const currentExperts = expertsDetails.slice(index, index + cardsToShow);

  return (
    <CustomPaper small>
      <Grid container spacing={4} sx={{ px: 3 }}>
        <Grid size={{ xs: 12 }}>
          <Typography
            align="center"
            sx={{
              typography: { xs: "h3" },
              textTransform: "uppercase",
              pb: 6,
            }}
          >
            Meet our{" "}
            <Typography
              component="span"
              color="primary"
              sx={{
                typography: { xs: "h3" },
                textDecoration: "underline",
                textUnderlineOffset: "8px",
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
              alignItems="stretch"
            >
              <Grid size="auto" sx={{ display: "flex", alignItems: "center" }}>
                <IconButton 
                  color="primary" 
                  onClick={() => handlePrev(true)}
                  sx={{
                    width: 32,
                    height: 32,
                    '& .MuiTouchRipple-root': {
                      width: 32,
                      height: 32,
                    }
                  }}
                >
                  <ChevronLeftIcon fontSize="small" />
                </IconButton>
              </Grid>

              {currentExperts.map((expert) => (
                <Slide
                  key={expert.id}
                  direction={direction}
                  in={true}
                  mountOnEnter
                  unmountOnExit
                >
                  <Grid size={{ xs: 12, md: 3.5 }}>
                    <TeamCard {...expert} />
                  </Grid>
                </Slide>
              ))}

              <Grid size="auto" sx={{ display: "flex", alignItems: "center" }}>
                <IconButton 
                  color="primary" 
                  onClick={() => handleNext(true)}
                  sx={{
                    width: 32,
                    height: 32,
                    '& .MuiTouchRipple-root': {
                      width: 32,
                      height: 32,
                    }
                  }}
                >
                  <ChevronRightIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default TeamCarousel;
