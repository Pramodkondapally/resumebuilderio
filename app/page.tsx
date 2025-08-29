"use client";

import DashboardContent from "./components/dashboard/DashboardContent";
import { auth } from "@/lib/firebase";
import { Loader } from "@/app/components/ui/loader";
import ChatWindow from "@/app/components/ui/ChatWindow"
if (auth.currentUser) {
  console.log("Logged in as:", auth.currentUser.email);
}


export default function Home() {
  return (
  <>
  <DashboardContent />
      <Loader>
      <span className="text-black dark:text-white">Getting things ready…</span>
    </Loader>
    <ChatWindow />
  </>
  );
}