
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

    <div className="w-full relative ">
      {/* Header height: 64px → subtract from total height */}
      <main className=" p-4 overflow-y-auto">
        {children}
      </main>
    </div>

   
  </div>
</section>


  
   
     
    </>
    
  );
}
