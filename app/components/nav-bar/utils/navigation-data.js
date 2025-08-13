import { v4 as uuidv4 } from "uuid";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EditNoteIcon from "@mui/icons-material/EditNote";
import InsightsIcon from "@mui/icons-material/Insights";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

const navigationItems = {
  home: {
    label: "Start",
    path: "/",
  },
  solutions: {
    label: "Solutions",
    path: "/solutions",
    children: [
      {
        id: uuidv4(),
        label: "VisionSense",
        description: "AI-powered image recognition.",
        icon: <CameraAltIcon />,
      },
      {
        id: uuidv4(),
        label: "NeuroPulse",
        description: "Brainwave data analysis",
        icon: <PsychologyIcon />,
      },
      {
        id: uuidv4(),
        label: "SmartScribe",
        description: "Automated text summarizer",
        icon: <EditNoteIcon />,
      },
      {
        id: uuidv4(),
        label: "PredictIQ",
        description: "Predictive analytics engine",
        icon: <InsightsIcon />,
      },
      {
        id: uuidv4(),
        label: "VoiceMorph ",
        description: "Real-time speech modulation",
        icon: <RecordVoiceOverIcon />,
      },
    ],
  },
  aboutUs: {
    label: "About Us",
    path: "/about-us",
  },
};

export default navigationItems;
