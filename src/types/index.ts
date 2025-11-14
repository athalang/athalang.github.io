export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: { from: string; to: string };
  bullets: string[];
};

export type Project = {
  name: string;
  description: string;
  tech?: string[];
  bullets?: string[];
  code?: string;
  demo?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: { from: string; to: string };
};

export type Link = {
  label: string;
  href: string;
  external?: boolean;
};
