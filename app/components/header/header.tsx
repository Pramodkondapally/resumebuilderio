"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const studentName = "John Doe";
  const collegeName = "Greenfield University";

  return (
    <header className=" Rb-header-bar w-full bg-white shadow-md px-6 py-3 flex items-center justify-between border-b border-gray-200">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-semibold text-gray-800">ResumeBuilder</span>
      </div>

      {/* Center: College Name */}
      <div className="text-center text-xl font-medium text-gray-700 hidden md:block">
        {collegeName}
      </div>

      {/* Right: Student Info */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-800 font-medium">{studentName}</span>
        <Image
          src="/avatar.png"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full border border-gray-300"
        />
        <button className="text-red-500 hover:underline text-sm">Logout</button>
      </div>
    </header>
  );
}
