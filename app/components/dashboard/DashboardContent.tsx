"use client";

import { FileText, LayoutTemplate, PlusCircle, Download } from "lucide-react";

export default function DashboardContent() {
  const studentName = "John Doe";
  const resumeProgress = 65;

  return (
    <div className="space-y-6 p-6 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {studentName} 👋</h2>
      <p className="text-gray-500">Here’s what’s happening with your resumes today.</p>

      {/* Resume Completion */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-medium mb-2 text-gray-700">Resume Completion</h3>
        <div className="bg-gray-200 rounded-full h-4 w-full">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${resumeProgress}%` }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{resumeProgress}% completed</p>
      </div>

      {/* Resume List */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Resumes</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FileText className="text-blue-500" />
            <span>Software Engineer Resume</span>
          </div>
          <div className="flex gap-2">
            <button className="text-blue-600 hover:underline text-sm">Edit</button>
            <button className="text-green-600 hover:underline text-sm">Download</button>
          </div>
        </div>
      </div>

      {/* Template Suggestions */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Try New Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Modern", "Classic", "Minimal"].map((template) => (
            <div key={template} className="border p-4 rounded-lg hover:shadow flex flex-col items-center cursor-pointer">
              <LayoutTemplate className="mb-2 text-gray-500" />
              <span>{template}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-xl p-6 flex space-x-4">
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <PlusCircle size={18} />
          <span>Create Resume</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <Download size={18} />
          <span>Download All</span>
        </button>
      </div>
    </div>
  );
}
