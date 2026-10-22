export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'industries'
  | 'technology'
  | 'sustainability'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'warranty';

export interface ProductSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  keyFeatures: string[];
  specs: {
    label: string;
    value: string;
  }[];
  category: 'automotive' | 'telecom' | 'bess' | 'lead-replacement';
  image: string;
  badge: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutionsProvided: string[];
  typicalArchitecture: string;
  icon: string;
  image: string;
}

export interface TechPillar {
  id: string;
  title: string;
  summary: string;
  details: string[];
  icon: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  industry: string;
  application: string;
  requiredCapacityKwh: string;
  operatingConditions: string;
  notes: string;
  requestNda: boolean;
}
