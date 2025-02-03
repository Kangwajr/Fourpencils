import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "FourPencils brought our children's book to life with stunning illustrations that captured the magic perfectly.",
    author: "Sarah chabu",
    role: "Author",
  },
  {
    text: "Their 3D animations exceeded our expectations. The attention to detail is remarkable.",
    author: "Michael Ngoma",
    role: "Game Studio Director",
  },
  {
    text: "Working with FourPencils was a joy. They transformed our comic concept into a visual masterpiece.",
    author: "Emmanuel kabila",
    role: "Comic Publisher",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-sky-500">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-sky-50 relative"
            >
              <Quote className="absolute top-4 right-4 text-[#FFD700] h-8 w-8 opacity-50" />
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sky-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
