"use client";
import React, { useState, ReactNode } from "react";
import ClassicResume from "@/app/templates/templatesComponents/ClassicResume";
// Template type
type Template = {
  id: number;
  name: string;
  previewImage: string;
  component?: ReactNode;
};

export default function PreviewBox() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Example template (you can replace component with your ClassicResume)
  const template: Template = {
    id: 1,
    name: "Classic Resume",
    previewImage: "/preview/classic.png",
    component: <div className="w-full h-[600px] bg-gray-100"> <ClassicResume /> </div>,
  };

  const openPreview = (template: Template) => {
    setSelectedTemplate(template);
  };

  const closePreview = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      {/* Main Section */}
      <section className="bg-white w-full h-screen hidden md:flex lg:flex items-center justify-center">
        {/* Clickable Area to open modal */}
        <div
          onClick={() => openPreview(template)}
          className="overflow-auto shadow-md rounded-md w-[80%] h-[80%] p-4 duration-300 transition-all ease-in-out hover:bg-zinc-50 hover:scale-[1.02] cursor-pointer"
        >
            <ClassicResume />
          
        </div>
      </section>

      {/* Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-[#f7f7f7] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-4xl shadow-lg p-8 w-[80%] relative">
            {/* Close button */}
            <button
              onClick={closePreview}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 cursor-pointer duration-300 transition-all ease-in-out hover:bg-zinc-50 hover:scale-[1.02]"
            >
              ✕
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

            <button className="bg-black rounded-full px-4 py-2 text-white hover:text-black mt-2 cursor-pointer duration-300 transition-all ease-in-out hover:bg-zinc-50 hover:scale-[1.02]">
              Download Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
