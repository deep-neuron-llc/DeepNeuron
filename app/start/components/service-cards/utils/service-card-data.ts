import { v4 as uuidv4 } from "uuid";
import TimelineIcon from "@mui/icons-material/Timeline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { SvgIconComponent } from "@mui/icons-material";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: SvgIconComponent;
}

const serviceCardData: ServiceData[] = [
  {
    id: uuidv4(),
    title: "Dynamic Working Progress",
    description:
      "Our team’s approach is dynamic. We plan everything thoroughly but are fluid enough to make tweaks to our strategy on the go to ensure the best results for our clients",
    icon: TimelineIcon,
  },
  {
    id: uuidv4(),
    title: "24/7 Support",
    description:
      "Deep Neuron is your team, and we work according to your hours. We are here whenever you need us. From dusk till dawn, you will always find someone on the other end catering to your needs",
    icon: SupportAgentIcon,
  },
  {
    id: uuidv4(),
    title: "Quality Assurance",
    description:
      "We work according to your standards. We will work tirelessly to make sure that you get the quality you want before putting anything out there. Quality assurance is the top priority here at Deep Neuron.",
    icon: VerifiedIcon,
  },
];

const industryServiceCardData: ServiceData[] = [
  {
    id: uuidv4(),
    title: "Healthcare",
    description:
      "Leverage AI for predictive diagnostics, medical image analysis, and patient outcome forecasting.",
    icon: LocalHospitalIcon,
  },
  {
    id: uuidv4(),
    title: "Education",
    description:
      "Personalized learning paths, AI grading assistants, and predictive student analytics.",
    icon: SchoolIcon,
  },
  {
    id: uuidv4(),
    title: "Retail",
    description:
      "Use AI for personalized recommendations, inventory forecasting, and customer segmentation.",
    icon: StorefrontIcon,
  },
];

export { serviceCardData, industryServiceCardData };
export type { ServiceData };
