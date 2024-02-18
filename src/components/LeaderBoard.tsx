"use client";

import UserList from "./UserList";

const LeaderBoard = () => {
  return (
    <div className="bg-[#475250] w-full rounded-xl">
      <div className="p-4 border rounded-xl bg-[#505a56] text-white sticky top-0 z-10">
        Leaderboard
      </div>
      <div className="w-full max-h-80 overflow-y-auto">
        <UserList />
      </div>
    </div>
  );
};

export default LeaderBoard;
