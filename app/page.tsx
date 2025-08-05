"use client";

import DashboardContent from "./components/dashboard/DashboardContent";
import { auth } from "@/lib/firebase";
if (auth.currentUser) {
  console.log("Logged in as:", auth.currentUser.email);
}


export default function Home() {
  return <DashboardContent />;
}
