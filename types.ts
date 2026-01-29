import { LucideIcon } from "lucide-react";

export interface IWhere {
  icon: LucideIcon;
  title: string;
  description: string;
  cardBg: string;
  iconBg: string;
}

export interface IWork {
  title: string;
  image: string;
}

export interface IService {
  id: number;
  title: string;
  description?: string;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface ISectionTitleAlt {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  dir?: "left" | "center";
}

export interface ICustomIcon {
  icon: LucideIcon;
  dir?: "left" | "right";
}

export interface IExperience {
  image: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string[];
}
