import { v4 as uuidv4 } from "uuid";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FunctionsIcon from "@mui/icons-material/Functions";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import StorageIcon from "@mui/icons-material/Storage";
import TranslateIcon from "@mui/icons-material/Translate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AiStrategyConsultingLottie from "../../../../../public/ai-strategy-consulting.json";
import MLModelDevelopmentLottie from "../../../../../public/ml-model-development.json";
import MLOpsDeploymentLottie from "../../../../../public/mlops-deployment.json";
import DataEngineeringLottie from "../../../../../public/data-engineering.json";
import NLPSolutionsLottie from "../../../../../public/nlp-solutions.json";
import ComputerVisionLottie from "../../../../../public/computer-vision.json";

const serviceData = [
  {
    id: uuidv4(),
    label: `AI Strategy Consulting`,
    icon: <PsychologyIcon fontSize="large" />,
    description: `
    <ul><li>Assess current business processes to identify AI opportunities.</li>
        <li>Develop tailored AI adoption roadmaps aligned with company goals.</li>
        <li>Conduct ROI analysis for potential AI initiatives.</li>
        <li>Provide executive workshops and AI literacy training.</li></ul>`,
    image: AiStrategyConsultingLottie,
  },
  {
    id: uuidv4(),
    label: `ML Model Development`,
    icon: <FunctionsIcon fontSize="large" />,
    description: `
    <ul><li>Design and train custom machine learning models from scratch.</li>
        <li>Fine-tune pre-trained models for domain-specific tasks.</li>
        <li>Apply cutting-edge algorithms for predictive analytics and automation.</li>
        <li>Perform rigorous validation and performance optimization.</li></ul>`,
    image: MLModelDevelopmentLottie,
  },
  {
    id: uuidv4(),
    label: `MLOps & Deployment`,
    icon: <CloudDoneIcon fontSize="large" />,
    description: `
    <ul><li>Build CI/CD pipelines for model training and deployment.</li>
        <li>Automate monitoring, versioning, and retraining of ML models.</li>
        <li>Deploy models to cloud, on-premise, or edge environments.</li>
        <li>Ensure scalability, reliability, and compliance in production AI systems.</li></ul>`,
    image: MLOpsDeploymentLottie,
  },
  {
    id: uuidv4(),
    label: `Data Engineering`,
    icon: <StorageIcon fontSize="large" />,
    description: `
    <ul><li>Design and implement robust data pipelines for analytics and AI.</li>
        <li>Integrate diverse data sources into unified storage systems.</li>
        <li>Optimize data warehouses and data lakes for high performance.</li>
        <li>Apply best practices in data quality, governance, and security.</li></ul>`,
    image: DataEngineeringLottie,
  },
  {
    id: uuidv4(),
    label: `NLP Solutions`,
    icon: <TranslateIcon fontSize="large" />,
    description: `
    <ul><li>Develop chatbots, virtual assistants, and customer support AI.</li>
        <li>Automate document classification, summarization, and translation.</li>
        <li>Implement sentiment analysis and entity recognition systems.</li>
        <li>Tailor language models to industry-specific vocabularies.</li></ul>`,
    image: NLPSolutionsLottie,
  },
  {
    id: uuidv4(),
    label: `Computer Vision`,
    icon: <VisibilityIcon fontSize="large" />,
    description: `
    <ul><li>Build object detection, recognition, and tracking systems.</li>
        <li>Automate quality inspection using image and video analysis.</li>
        <li>Implement facial recognition and biometric verification solutions.</li>
        <li>Develop AR/VR applications powered by image understanding.</li></ul>`,
    image: ComputerVisionLottie,
  },
];

export default serviceData;
