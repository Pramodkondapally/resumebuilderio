"use client";
import React, { useState, useEffect } from "react";
import ClassicResume from "@/app/templates/templatesComponents/ClassicResume";
import { resumeData as defaultData } from "@/app/templates/templatesComponents/data/classicData";

export default function PreviewBox() {
  const [selectedTemplate, setSelectedTemplate] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [resumeData, setResumeData] = useState(defaultData);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) setResumeData(JSON.parse(saved));
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  return (
    <>
      {/* Main Section */}
      <section className="bg-white w-full h-screen hidden md:flex lg:flex items-center justify-center p-4">
        <div
          onClick={() => setSelectedTemplate(true)}
          className="overflow-auto shadow-md w-[100%] h-[90%] rounded-3xl p-4 cursor-pointer hover:bg-zinc-50 hover:scale-[1.02] transition-all relative"
        >
          {/* Floating Edit Button */}
            <button
              onClick={() => setEditMode(!editMode)}
              className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-700 cursor-pointer" style={{
                fontSize: "12px"
              }}
            >
              {editMode ? "Save" : "Edit"}
            </button>
          <ClassicResume
            data={resumeData}
            editMode={editMode}
            setResumeData={setResumeData}
          />
        </div>
      </section>

      {/* Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-[#f7f7f7] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-4xl shadow-lg p-8 w-[80%] relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedTemplate(false)}
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              ✕
            </button>

            

            <h2 className="text-xl font-semibold mb-4">Classic Resume Preview</h2>

            <div className="overflow-auto max-h-[80vh] border border-gray-200 p-4 rounded-2xl">
              <ClassicResume
                data={resumeData}
                editMode={editMode}
                setResumeData={setResumeData}
              />
            </div>

            <button className="bg-black rounded-full px-4 py-2 text-white mt-2 hover:bg-gray-800">
              Download Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
