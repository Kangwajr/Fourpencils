import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    // <section className="bg-black">

    <section className="relative h-[100vh] overflow-hidden">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/4Pencils.mp4" type="video/mp4" />
      </video>
      <div className="absolute container mx-auto px-4 py-24">
        <div className=" max-w-4xl mx-auto border border-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-black/70">
              <h2 className="text-3xl font-bold mb-6 text-sky-500">
                Get in Touch
              </h2>
              <p className="text-[#FFD700] mb-8">
                Ready to bring your creative vision to life? We'd love to hear
                from you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-sky-500" />
                  <span className="text-[#FFD700]">
                    4pencilsanims@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-sky-500" />
                  <span className="text-[#FFD700]">+260976659962</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-sky-700" />
                  <span className="text-[#FFD700]">
                    Salama park Cucumber st Plot No. 11, Lusaka Zambia
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-black/70">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-sky-500 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-[#FFD700] rounded-lg focus:ring-1 focus:ring-[#FFD700] focus:border-transparent bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-[#FFD700] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-500 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-[#FFD700] rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFD700] hover:bg-[#FFC700] text-sky-500 font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div> 
     <Footer/>
    </section>
  );
};

export default Contact;
