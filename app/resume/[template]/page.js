"use client";

import { useRef } from "react";
import { use } from "react"; // <-- new React hook
import html2canvas from "html2canvas";

import ClassicResume from "../../templates/templatesComponents/ClassicResume";
import GraphicTemplate from "../../templates/templatesComponents/GraphicResume";
import MarketingResume from "../../templates/templatesComponents/MarketingResume";
import ResumeME from "../../templates/templatesComponents/PersonalResume";
import WebDeveloperTemplate from "../../templates/templatesComponents/WebDeveloper";

const templates = {
  classic: ClassicResume,
  graphic: GraphicTemplate,
  marketing: MarketingResume,
  personal: ResumeME,
  webdeveloper: WebDeveloperTemplate,
};

export default function ResumePage({ params }) {
  const unwrappedParams = use(params); // ✅ unwrap the promise
  const { template } = unwrappedParams;

  const SelectedTemplate = templates[template?.toLowerCase()] || ClassicResume;
  const resumeRef = useRef();

  const handleSnapshot = async () => {
    const canvas = await html2canvas(resumeRef.current);
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${template}-resume.png`;
    link.click();
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 p-4">
      {/* Resume Preview */}
      <div ref={resumeRef} className="w-[70%] h-full bg-white shadow-lg p-6">
        <SelectedTemplate />
      </div>

      {/* Export Button */}
      <button
        onClick={handleSnapshot}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Export as PNG
      </button>
    </div>
  );
}
