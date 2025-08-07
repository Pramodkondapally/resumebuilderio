"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Navitemsvgs from "@/public/Navitemsvgs";

type SidebarProps = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`h-screen w-24 bg-white p-2 border-l border-r border-[#E2E8F0] flex flex-col justify-between items-center
      ${sidebarOpen ? "flex" : "hidden"} md:flex lg:flex transition-all duration-300 z-50 fixed md:static`}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center">
    

        {/* Main items */}
        {Navitemsvgs.slice(0, 6).map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(item.path)}
            className={`flex items-center justify-center my-3 cursor-pointer rounded-full w-[48px] h-[48px] transition-colors duration-200 ${
              pathname === item.path ? "bg-[#F8FAFC]" : "hover:bg-[#F8FAFC]"
            }`}
          >
            {typeof item.icon === "string" ? (
              <Image src={item.icon} alt={item.label} width={24} height={24} />
            ) : (
              <item.icon />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section: Settings & Profile */}
      <div className="flex flex-col items-center mb-4">
        {Navitemsvgs.slice(6).map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(item.path)}
            className="flex items-center justify-center my-2 cursor-pointer hover:bg-gray-200 rounded-full w-[48px] h-[48px] transition-colors duration-200"
          >
            {typeof item.icon === "string" ? (
              <Image src={item.icon} alt={item.label} width={24} height={24} />
            ) : (
              <item.icon />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}