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

export interface ITestimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatar: string;
  handle: string;
  rating: 1 | 2 | 3 | 4 | 5;
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
