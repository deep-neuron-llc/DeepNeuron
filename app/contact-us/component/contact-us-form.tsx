"use client";
import { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CustomPaper from "@/app/components/custom-paper/custom-paper";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUsForm = () => {
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
    setContact((p) => ({ ...p, [name]: value }));
  };

  return (
    <div>
      <CustomPaper>
        <Grid container spacing={4} sx={{ px: 3 }}>
          <Grid size={{ xs: 6 }} sx={{ display: { xs: "none", md: "flex" } }}>
            <Paper variant="outlined" sx={{ height: 400, width: "100%", p: 3 }}>
              <Typography align="center">Image to be provided</Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container direction="column" spacing={2}>
              <Typography variant="h5">Send us an E-mail</Typography>
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
      </CustomPaper>
    </div>
  );
};

export default ContactUsForm;
