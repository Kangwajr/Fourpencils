import { Star, Users, Clock } from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Projects Completed",
    icon: <Star className="w-6 h-6" />,
  },
  {
    value: "150+",
    label: "Happy Clients",
    icon: <Users className="w-6 h-6" />,
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: <Clock className="w-6 h-6" />,
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#EB5C00] to-[#B70071]">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-orange-100 rounded-xl"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 text-[#B70071]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#EB5C00] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#B70071]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
