import React from "react";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

const ProcessCard = ({
  icon: Icon,
  step,
  title,
  description,
}: ProcessCardProps) => {
  return (
    <div className="relative p-6 bg-gradient-to-r from-[#EB5C00] to-[#B70071] rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="absolute -top-4 -left-4 bg-[#EB5C00] rounded-full w-8 h-8 flex items-center justify-center text-purple-600 font-bold">
        {step}
      </div>
      <div className="text-[#B70071] mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-[#FFD700]">{description}</p>
    </div>
  );
};

export default ProcessCard;
