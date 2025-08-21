export type WorkExperience = {
  title: string;
  date: string;
  bullets: string[];
};

export type Education = {
  title: string;
  date: string;
  school: string;
  bullets: string[];
};

export type AdditionalInfo = {
  label: string;
  value: string;
};

export type ResumeData = {
  header: {
    name: string;
    contact: string;
    website: string;
  };
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  additionalInfo: AdditionalInfo[];
};
