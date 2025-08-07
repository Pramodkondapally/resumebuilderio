
"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import PreviewBox from "./previewBox";
import TemplateResumes from "./templateResumes";

export default function PrivateRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
   <section className="bg-white w-full h-screen overflow-hidden">
  <div className="flex h-full w-full">
    <div className="w-1/3 border-r border-gray-200 flex">
      <Sidebar sidebarOpen={sidebarOpen} />
      <TemplateResumes />
    </div>

    <div className="w-2/3 relative">
      {/* Header height: 64px → subtract from total height */}
      <main className="absolute top-[64px] bottom-0 left-0 right-0 p-2 md:p-4 overflow-y-auto">
        {children}
      </main>
    </div>

    <div className="w-1/3 border-l border-gray-200 bg-[#F0F1F5]">
      <PreviewBox />
    </div>
  </div>
</section>


  
   
     
    </>
    
  );
}
