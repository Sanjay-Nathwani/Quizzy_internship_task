"use client";

import { TrendingUp } from "lucide-react";

type Props = {
    title: string;
}

const Card = ({title}:Props) => {
  return (
    <div className="w-72 h-64 rounded-xl bg-gradient-to-br from-[#424844] to-[#404141] flex flex-col gap-2 p-4 text-[#898c89]">
      <div className="text-sm">Last Practice Linear etc etc</div>
      <div className="text-sm">28/02/23</div>
      <div className="text-white font-bold">
        <TrendingUp className="w-20 h-20" />
      </div>
      <div className="text-white font-semibold text-3xl">{title}</div>
      <div className="text-sm">A description of the above parameter goes here.</div>
    </div>
  );
};

export default Card;
