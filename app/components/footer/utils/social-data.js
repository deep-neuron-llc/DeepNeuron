import { v4 as uuidv4 } from "uuid";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialData = [
  {
    id: uuidv4(),
    label: "Facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/DeepNeuronConsulting",
  },
  {
    id: uuidv4(),
    label: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/deep-neuron-c/",
  },
  {
    id: uuidv4(),
    label: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/deep_neuron/",
  },
  {
    id: uuidv4(),
    label: "GitHub",
    icon: GitHubIcon,
    link: "https://github.com/deep-neuron-llc",
  },
];

export default socialData;
