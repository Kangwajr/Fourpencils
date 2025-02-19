import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Palette, Users, Target, Lightbulb, Award, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const achievements = [
    { number: "5+", text: "Years Experience" },
  ];

  const values = [
    {
      icon: Palette,
      title: "Creativity and Innovation",
      description: "We combine imagination with cutting-edge technologies to craft impactful and unique visual solutions.",
    },
    {
      icon: Users,
      title: "Sustainability and Education",
      description: "We combine imagination with cutting-edge technologies to craft impactful and unique visual solutions",
    },
    {
      icon: Target,
      title: "Empowerment and Collaboration",
      description: "We uplift communities and build strong partnerships to achieve shared goals and drive progress.",
    },
    {
      icon: Lightbulb,
      title: "Excellence and Integrity",
      description: "We are committed to delivering high-quality results with honesty, transparency, and professionalism.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence always",
    },
    { 
      icon: Heart, 
      title: "Passion", 
      description: "Love for what we do" 
    },
  ];

  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative h-[80vh]">
  {/* Background Image */}
  <div 
    className="absolute inset-0  bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('/aboutpage.jpeg')",
    }}
  />
  
  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center">
    <div className="max-w-4xl mx-auto px-4">
      <TypeAnimation
        sequence={[
          "4 Pencils Animation Studio",
          1000,
          "Where Creativity Meets Technology",
          1000,
          "Bringing Your Ideas to Life",
          1000,
        ]}
        wrapper="h1"
        speed={50}
        className="text-5xl md:text-6xl font-bold text-sky-500 mb-6"
        repeat={Infinity}
      />
      <p className="text-xl text-[#FFD700]">
        Zambia's Premier Animation and Creative Design Studio
      </p>
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sky-500 mb-6">
                About Our Studio
              </h2>
              <p className="text-[#FFD700] mb-4">
                4 PENCILS ANIMATIONS is an animation studio and creative Hub created in Zambia. 
                Visual communication through digital tools is our forte. We animate, Design and 
                illustrate everything that goes through your head. We have no limits or barriers. 
                The further we get with your idea, the better.
              </p>
              <p className="text-[#FFD700] mb-4">
                We touch all animation and digital styles in 3D 2D, illustrations and comic books. 
                Whether you need Studio Quality 3D Animation, 2D Animation, illustrations, Motion 
                Graphics or some combination of these techniques to motivate, excite, convince, 
                compel or captivate your audience, 4 pencils can bring your story to life and 
                magic to your message.
              </p>
            </div>
            <div className="relative">
              <img
                src="/studio1.jpeg"
                alt="Studio workspace"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] text-sky-500 p-6 rounded-xl">
                <p className="text-2xl font-bold"> Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <img
          src="/girl alone 1/chi.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-500 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 hover:border-sky-500 p-8 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-semibold text-sky-500 mb-2">
                  {value.title}
                </h3>
                <p className="text-[#FFD700]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20" style={{
      backgroundImage: "url('/studio2.jpeg')",
    }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sky-500 mb-4">
              Visit Our Studio
            </h2>
            <p className="text-[#FFD700]">
              Salama Park cucumber cl st Plot No. 11, Lusaka Zambia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">
                Address
              </h3>
              <p className="text-[#FFD700]">
                Salama Park cucumber cl st Plot No. 11, Lusaka, Zambia
              </p>
            </div>
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">Email</h3>
              <p className="text-[#FFD700]">4pencilsanims@gmail.com</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">Phone</h3>
              <p className="text-[#FFD700]">+260976659962</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;