"use client";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Lottie from "lottie-react";
import CustomPaper from "@/app/components/custom-paper/custom-paper";
import GetInTouchImage from "../../../public/get-in-touch.json";

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
      <CustomPaper small>
        <Stack direction="row" gap={4} sx={{ px: 3 }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}>
            <Lottie
              animationData={GetInTouchImage}
              loop={false}
              autoplay={true}
              style={{ height: 400 }}
            />
          </Box>
          <Stack gap={2} sx={{ width: "100%" }}>
            <Typography variant="h5">Send us an E-mail</Typography>
            <Stack direction="row" gap={2} alignItems="center">
              <Avatar src="/deep-neuron-icon.svg" />
              <Typography variant="h5" color="primary">
                hello@deep-neuron.com
              </Typography>
            </Stack>
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
          </Stack>
        </Stack>
      </CustomPaper>
    </div>
  );
};

export default ContactUsForm;
