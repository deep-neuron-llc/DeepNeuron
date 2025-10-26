"use client";
import NavBar from "../components/nav-bar/nav-bar";
import ContactUsForm from "./component/contact-us-form";
import CustomPaper from "../components/custom-paper/custom-paper";
import { Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <NavBar>
      <CustomPaper alt small>
        <Typography
          variant="h3"
          color="primary"
          sx={{ textTransform: "uppercase" }}
          align="center"
        >
          <b>Contact Us</b>
        </Typography>
      </CustomPaper>
      <ContactUsForm />
    </NavBar>
  );
};

export default ContactUs;
