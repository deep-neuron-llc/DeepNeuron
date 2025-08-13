"use client";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useCustomTheme } from "@/theme";
import NavBar from "../components/nav-bar/nav-bar";
import Banner from "../components/banner/banner";
import { useState } from "react";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const { darkMode } = useCustomTheme();
  const [contact, setContact] = useState<ContactState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <NavBar>
      <Banner titleStrong="Contact Us" />
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
              <Grid
                size={{ xs: 6 }}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Paper
                  variant="outlined"
                  sx={{ height: 400, width: "100%", p: 3 }}
                >
                  <Typography align="center">Image to be provided</Typography>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container direction="column" spacing={2}>
                  <Typography variant="h5">Shoot us an E-mail</Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    hello@deep-neuron.com
                  </Typography>
                  <Typography variant="h5">Contact Us</Typography>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder="Max Mustermann"
                    label="Name"
                    value={contact.name}
                    onChange={handleOnChange}
                  />
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    placeholder="max-mustermann@deutsche-email.de"
                    label="E-mail"
                    value={contact.email}
                    onChange={handleOnChange}
                  />
                  <TextField
                    fullWidth
                    type="tel"
                    name="phone"
                    placeholder="+49 (0) XXXX XXX XXX XX"
                    label="Phone"
                    value={contact.phone}
                    onChange={handleOnChange}
                  />
                  <TextField
                    fullWidth
                    multiline
                    name="message"
                    placeholder="Your message..."
                    label="Message"
                    value={contact.message}
                    onChange={handleOnChange}
                  />

                  <Button fullWidth variant="contained">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </NavBar>
  );
};

export default ContactUs;
