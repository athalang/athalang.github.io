import type { Link, Experience, Project, SkillGroup, Education } from "@/types";

export const NAME = "Aditya Thalang";
export const DESCRIPTION =
  "CS grad interested in machine learning systems and scientific computing.";

export const LINKS: Link[] = [
  {
    label: "GitHub",
    href: "https://github.com/athalang",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-t-365967303/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:athalang@hotmail.com",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Machine Learning Engineer Intern",
    company: "Midas Advisory",
    location: "London, UK (Remote)",
    period: { from: "August 2024", to: "October 2024" },
    bullets: [
      "Built a Ray-orchestrated retrieval-augmented generation (RAG) ETL pipeline to automate M&A intelligence extraction from PDFs, SEC filings and news articles.",
      "Developed an entity resolution layer unifying bank identifiers and name variants into consistent entity IDs to improve retrieval accuracy.",
      "Benchmarked Hugging Face models in DSPy across faithfulness, latency and cost per token.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Neural Network Dynamics Analysis",
    description: "Undergraduate dissertation",
    bullets: [
      "Trained and tracked Neural ODE models in MLflow to learn quaternion composition without explicit normalisation.",
      "Interpreted learned strategies using Jacobian analysis, finding consistent norm reduction across trajectories.",
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["Python", "C", "C++", "Rust"],
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "MLflow", "Ray", "DSPy"],
  },
  {
    label: "Data",
    items: ["Spark", "Pandas", "PostgreSQL", "Milvus", "QGIS"],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "BSc Computer Science with Artificial Intelligence",
    institution: "University of Nottingham",
    period: { from: "Sep 2022", to: "Jul 2025" },
  },
];
