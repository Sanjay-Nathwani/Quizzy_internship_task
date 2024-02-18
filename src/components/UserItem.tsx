"use client";

import Image from "next/image";

type Props = {
  index: number;
  name: string;
};

const UserItem = ({ index, name }: Props) => {
  return (
    <div className="bg-[#505a56] shadow-2xl p-4 border border-white w-[90%] rounded-2xl flex justify-between hover:bg-gradient-to-b from-[#6b795e] to-[#5b7671] cursor-pointer">
      <div className="flex gap-[2px] items-center">
        <span className="text-[#eefe87] font-semibold">{index}.</span>
        <div className="w-5 h-5">
          <Image
            src={"/user-icon.png"}
            alt="user-icon"
            width={5}
            height={5}
            className="object-cover w-5 h-5"
          />
        </div>
        <div className="bg-[#d4d6d6] w-5 h-5 rounded-full" />
        <span className="text-white">{name}</span>
      </div>

      <div className="text-white">
        0/233 <span className="text-[#eefe87] font-semibold">XP</span>
      </div>
    </div>
  );
};

export default UserItem;
