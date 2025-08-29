// app/editor/resumetemplate/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import ClassicResume from "@/app/templates/templatesComponents/ClassicResume";
import GraphicTemplate from "@/app/templates/templatesComponents/GraphicResume";
import MarketingResume from "@/app/templates/templatesComponents/MarketingResume";
import ResumeME from "@/app/templates/templatesComponents/PersonalResume";
import WebDeveloperTemplate from "@/app/templates/templatesComponents/WebDeveloper";

const templatesMap: Record<string, React.FC<any>> = {
  classic: ClassicResume,
  graphic: GraphicTemplate,
  marketing: MarketingResume,
  personal: ResumeME,
  webdev: WebDeveloperTemplate,
};

export default function ResumeTemplatePage() {
  const { slug } = useParams() as { slug: string };

  const TemplateComponent = templatesMap[slug] || ClassicResume;

  const sampleData = {
    name: "Jacqueline Thompson",
    email: "hello@reallygreatsite.com",
    phone: "123-456-7890",
    summary: "Results-oriented Engineering Executive...",
    experience: [],
  };

  return (
    <div className="p-6 overflow-y-scroll h-[calc(100vh-4rem)]">
      <TemplateComponent data={sampleData} />
    </div>
  );
}
