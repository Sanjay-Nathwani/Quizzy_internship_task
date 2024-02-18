"use client";

import Image from "next/image";
import Streak from "./Streak";

const StreakAndXp = () => {
  return (
    <div className="flex items-center justify-between gap-2 bg-gradient-to-b from-[#4a5652] to-[#41534f] px-3 py-2 rounded-xl">
      <Streak progress={4} />
      <div className="flex flex-col items-end">
        <div className="flex gap-1 items-center">
          <div className="w-10 h-10">
            <Image
              src={"/user-icon.png"}
              alt="user-icon"
              width={10}
              height={10}
              className="object-cover w-10 h-10"
            />
          </div>
          <div className="text-white text-2xl">
            0/233 <span className="text-[#eefe87] font-semibold">XP</span>
          </div>
        </div>

        <div className="p-2 bg-[#7d8785] text-[#eeff87] rounded-lg cursor-pointer">
          Take a Quiz
        </div>
      </div>
    </div>
  );
};

export default StreakAndXp;
