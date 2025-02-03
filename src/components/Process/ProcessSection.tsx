import React from "react";
import { MessageSquare, Palette, PenTool, Send } from "lucide-react";
import ProcessCard from "./ProcessCard";

const processes = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Consultation",
    description:
      "Initial meeting to understand your vision, requirements, and project goals.",
  },
  {
    icon: PenTool,
    step: "2",
    title: "Concept Design",
    description:
      "Creating preliminary sketches and concepts for your review and feedback.",
  },
  {
    icon: Palette,
    step: "3",
    title: "Development",
    description:
      "Detailed development of approved concepts with regular progress updates.",
  },
  {
    icon: Send,
    step: "4",
    title: "Delivery",
    description:
      "Final refinements and delivery of your project in the required formats.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-[#EB5C00]">
            Our Process
          </h2>
          <p className="text-[#B70071] font-bold max-w-2xl mx-auto">
            We follow a structured approach to ensure your creative vision comes
            to life exactly as you imagined.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {processes.map((process, index) => (
            <ProcessCard key={index} {...process} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
