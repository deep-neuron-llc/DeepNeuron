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

const COLOR = "primary"

const navigationItems = {
  home: {
    label: "Start",
    path: "/",
    icon: <HomeIcon color={COLOR}/>,
  },
  solutions: {
    label: "Solutions",
    path: "/solutions",
    icon: <AppsIcon color={COLOR}/>,
    children: [
      {
        id: uuidv4(),
        label: "VisionSense",
        description: "AI-powered image recognition.",
        icon: <CameraAltIcon color={COLOR} />,
        link: "",
        linkIcon: <LaunchIcon color={COLOR}/>,
      },
      {
        id: uuidv4(),
        label: "NeuroPulse",
        description: "Brainwave data analysis",
        icon: <PsychologyIcon color={COLOR}/>,
        link: "",
        linkIcon: <LaunchIcon color={COLOR}/>,
      },
      {
        id: uuidv4(),
        label: "SmartScribe",
        description: "Automated text summarizer",
        icon: <EditNoteIcon color={COLOR}/>,
        link: "",
        linkIcon: <LaunchIcon color={COLOR}/>,
      },
      {
        id: uuidv4(),
        label: "PredictIQ",
        description: "Predictive analytics engine",
        icon: <InsightsIcon color={COLOR}/>,
        link: "",
        linkIcon: <LaunchIcon color={COLOR}/>,
      },
      {
        id: uuidv4(),
        label: "VoiceMorph ",
        description: "Real-time speech modulation",
        icon: <RecordVoiceOverIcon color={COLOR}/>,
        link: "",
        linkIcon: <LaunchIcon color={COLOR}/>,
      },
    ],
  },
  learning: {
    label: "Learning",
    icon: <SchoolIcon color={COLOR}/>,
    link: "",
    linkIcon: <LaunchIcon color={COLOR}/>,
  },
  aboutUs: {
    label: "About Us",
    path: "/about-us",
    icon: <PeopleAltIcon color={COLOR}/>,
  },
  contactUs: {
    label: "Get in touch",
    path: "/contact-us",
  },
};

export default navigationItems;
