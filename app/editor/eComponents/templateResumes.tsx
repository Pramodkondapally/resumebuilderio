"use client";
import { useRouter } from "next/navigation";

export default function TemplateResumes() {
  const router = useRouter();

  // define your keywords
  const templates = [
    { key: "classic", name: "Classic Resume" },
    { key: "graphic", name: "Graphic Resume" },
    { key: "marketing", name: "Marketing Resume" },
    { key: "personal", name: "Personal Resume" },
    { key: "webdev", name: "Web Developer Resume" },
  ];

  return (
    <div className="h-screen overflow-y-auto p-4 w-full bg-white">
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <div
            key={template.key}
            onClick={() => router.push(`/editor/resumetemplate/${template.key}`)}
            className="h-[150px] w-full bg-white shadow-2xl shadow-slate-700/15 rounded-md flex flex-col items-center justify-center border border-indigo-100 cursor-pointer transition-transform duration-300 ease-in-out hover:bg-zinc-50 hover:scale-[1.02]"
            style={{
              animationName: "floatUp",
              animationDuration: "0.5s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xs text-gray-600 mt-2">
              {template.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
