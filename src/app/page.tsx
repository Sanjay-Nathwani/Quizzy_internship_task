"use client";

import Card from "@/components/Card";
import LeaderBoard from "@/components/LeaderBoard";
import Logo from "@/components/Logo";
import MobileSidebar from "@/components/MobileSidebar";
import StreakAndXp from "@/components/StreakAndXp";
import Thread from "@/components/Thread";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Home() {

  const isSmall = useMediaQuery({ query: "(max-width: 1280px)" });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="flex w-full h-screen">

      {/* left sidebar */}
      {isSmall && (
        <div className="w-20 h-full bg-[#eeff87] flex justify-center">
          <Menu className="w-12 h-12 cursor-pointer mt-3" onClick={toggleSidebar} />
        </div>
      )}

      {isSmall && isSidebarOpen && (
        <MobileSidebar />
      )}

      <div className={`${isSmall ? "hidden" : "flex"} flex-col shadow-white gap-3 p-6 w-1/4 h-full bg-gradient-to-b from-[#435451] to-[#2e2e2e]`}>
        <Logo />
        <Thread />
        <StreakAndXp />
        <LeaderBoard />
        <div className="flex gap-2 items-center cursor-pointer">
          <div className="bg-[#d4d6d6] w-10 h-10 rounded-full" />
          <span className="text-white text-2xl font-light">Name</span>
        </div>
        <div className="flex gap-2 items-center text-white cursor-pointer">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </div>
      </div>

      {/* main */}
      <div className={`${isSmall ? "w-fit" : "w-3/4"} h-full px-20 py-12 bg-gradient-to-br from-[#2f3630] via-[#2b2d2a] to-[#2f3833] overflow-auto`}>
        <p className="text-3xl text-white font-semibold">
          Hey, <span className="text-[#eefe87]">Name</span>
        </p>
        <p className="text-3xl text-white font-semibold">
          How&apos;s your prep for the{" "}
          <span className="text-[#eefe87]">March SAT</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 flex-wrap">
          <Card title={"Practice"} />
          <Card title={"Mock"} />
          <Card title={"Title Text here"} />
          <Card title={"Title Text here"} />
          <Card title={"Title Text here"} />
          <Card title={"Title Text here"} />
          <Card title={"Title Text here"} />
        </div>
      </div>
    </div>
  );
}
