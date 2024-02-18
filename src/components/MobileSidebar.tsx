"use client";

import { LogOut } from "lucide-react";
import LeaderBoard from "./LeaderBoard";
import Logo from "./Logo";
import StreakAndXp from "./StreakAndXp";
import Thread from "./Thread";

const MobileSidebar = () => {
    return (
      <div className="fixed left-20 top-0 z-20 bg-white w-72 h-full">
        <div
          className="flex flex-col shadow-white gap-3 p-6 w-full h-full bg-gradient-to-b from-[#435451] to-[#2e2e2e] border-r-2 "
        >
          <Logo />
          <Thread  />
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
      </div>
    );
}
 
export default MobileSidebar;