"use client";

import { Eye, Plus } from "lucide-react";

const templates = [
  { id: 1, name: "Modern", previewImage: "/templates/modern.png" },
  { id: 2, name: "Classic", previewImage: "/templates/classic.png" },
  { id: 3, name: "Minimal", previewImage: "/templates/minimal.png" },
  { id: 4, name: "Professional", previewImage: "/templates/professional.png" },
  { id: 4, name: "Fresher", previewImage: "/templates/Fresher.png" },
  { id: 4, name: "Experieanced", previewImage: "/templates/Experieanced.png" },
];

export default function TemplatesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Choose a Resume Template</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <div className="w-full h-48 bg-gray-100 rounded mb-3 overflow-hidden">
              <img
                src={template.previewImage}
                alt={template.name}
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="font-medium text-lg text-gray-700 mb-2">{template.name}</h2>

            <div className="flex space-x-3">
              <button className="flex items-center px-3 py-1 text-sm text-blue-600 hover:underline">
                <Eye size={16} className="mr-1" />
                Preview
              </button>
              <button className="flex items-center px-3 py-1 text-sm text-green-600 hover:underline">
                <Plus size={16} className="mr-1" />
                Use
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
