export type NavLink = {
  href: string;
  label: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type FeatureCardItem = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export type IndustryItem = {
  icon: string;
  title: string;
  description: string;
  solutions: string[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyItem = {
  icon: string;
  sector: string;
  company: string;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  tags: string[];
};

export type ContactInfoItem = {
  icon: string;
  label: string;
  value: string;
  href: string | null;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initial: string;
};

export type ValueItem = {
  icon: string;
  title: string;
  description: string;
};
