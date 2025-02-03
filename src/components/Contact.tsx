import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 ">
        <div className="bg-sky-500 rounded-2xl p-12 text-center text-[#FFD700]">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#FFD700]">
            Let's work together to bring your creative vision to life. Contact
            us today for a free consultation.
          </p>
          <button className="bg-[#FFD700] text-sky-500 px-8 py-3 rounded-full hover:bg-[#FFC700]transition-colors shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
