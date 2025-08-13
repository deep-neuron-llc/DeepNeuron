import { v4 as uuidv4 } from "uuid";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EditNoteIcon from "@mui/icons-material/EditNote";
import InsightsIcon from "@mui/icons-material/Insights";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import LaunchIcon from "@mui/icons-material/Launch";

const navigationItems = {
  home: {
    label: "Start",
    path: "/",
    icon: <HomeIcon />,
  },
  solutions: {
    label: "Solutions",
    path: "/solutions",
    icon: <AppsIcon />,
    children: [
      {
        id: uuidv4(),
        label: "VisionSense",
        description: "AI-powered image recognition.",
        icon: <CameraAltIcon />,
        link: "",
        linkIcon: <LaunchIcon />,
      },
      {
        id: uuidv4(),
        label: "NeuroPulse",
        description: "Brainwave data analysis",
        icon: <PsychologyIcon />,
        link: "",
        linkIcon: <LaunchIcon />,
      },
      {
        id: uuidv4(),
        label: "SmartScribe",
        description: "Automated text summarizer",
        icon: <EditNoteIcon />,
        link: "",
        linkIcon: <LaunchIcon />,
      },
      {
        id: uuidv4(),
        label: "PredictIQ",
        description: "Predictive analytics engine",
        icon: <InsightsIcon />,
        link: "",
        linkIcon: <LaunchIcon />,
      },
      {
        id: uuidv4(),
        label: "VoiceMorph ",
        description: "Real-time speech modulation",
        icon: <RecordVoiceOverIcon />,
        link: "",
        linkIcon: <LaunchIcon />,
      },
    ],
  },
  learning: {
    label: "Learning",
    icon: <SchoolIcon />,
    link: "",
    linkIcon: <LaunchIcon />,
  },
  aboutUs: {
    label: "About Us",
    path: "/about-us",
    icon: <PeopleAltIcon />,
  },
  contactUs: {
    label: "Get in touch",
    path: "/contact-us",
  },
};

export default navigationItems;
