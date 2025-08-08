"use client";
import { useState, ReactNode } from "react";
import ClassicResume from "./templatesComponents/ClassicResume";
import { Eye, Plus, X } from "lucide-react";

// Template type
type Template = {
  id: number;
  name: string;
  previewImage: string;
  component?: ReactNode;
};

const templates: Template[] = [
  { id: 1, name: "Modern", previewImage: "/templates/modern.png" },
  {
    id: 2,
    name: "Classic",
    previewImage: "/templates/classic.png",
    component: <ClassicResume />,
  },
  { id: 3, name: "Minimal", previewImage: "/templates/minimal.png" },
  { id: 4, name: "Professional", previewImage: "/templates/professional.png" },
  { id: 5, name: "Fresher", previewImage: "/templates/Fresher.png" },
  { id: 6, name: "Experienced", previewImage: "/templates/Experieanced.png" },
];

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const openPreview = (template: Template) => {
    setSelectedTemplate(template);
  };

  const closePreview = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Choose a Resume Template
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white border border-gray-200 rounded-4xl shadow-sm hover:shadow-lg transition p-4 flex flex-col items-center cursor-pointer duration-300 transition-all ease-in-out  hover:bg-zinc-50 hover:scale-[1.02]"
            >
              <div className="w-full h-48 bg-gray-100 rounded-2xl mb-3 overflow-hidden">
                <img
                  src={template.previewImage}
                  alt={template.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="font-medium text-lg text-gray-700 mb-2">
                {template.name}
              </h2>

              <div className="flex space-x-3">
                <button
                  onClick={() => openPreview(template)}
                  className="flex items-center px-3 py-1 text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  <Eye size={16} className="mr-1" />
                  Preview
                </button>
                <button className="flex items-center px-3 py-1 text-sm text-green-600 hover:underline  cursor-pointer">
                  <Plus size={16} className="mr-1" />
                  Use
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-[#f7f7f7] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-4xl shadow-lg p-8  w-[80%] relative">
            {/* Close button */}
            <button
              onClick={closePreview}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 cursor-pointer duration-300 transition-all ease-in-out  hover:bg-zinc-50 hover:scale-[1.02]"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {selectedTemplate.name} Preview
            </h2>

            <div className="overflow-auto max-h-[80vh] border border-gray-200 p-4 rounded-2xl">
              {selectedTemplate.component ? (
                selectedTemplate.component
              ) : (
                <img
                  src={selectedTemplate.previewImage}
                  alt={selectedTemplate.name}
                  className="w-full"
                />
              )}
            </div>
            <button className="bg-black rounded-full px-4 py-2 text-white hover:text-black align-center mt-2 cursor-pointer duration-300 transition-all ease-in-out  hover:bg-zinc-50 hover:scale-[1.02]">Customise now</button>
          </div>
        </div>
      )}
    </>
  );
}
