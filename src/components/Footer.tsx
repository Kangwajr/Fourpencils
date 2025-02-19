import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black  text-sky-500 py-12" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FourPencils</h3>
            <p className="text-[#FFD700]">
              Crafting visual stories that inspire and engage.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[#FFD700]">
              <li>2D Art</li>
              <li>3D Art</li>
              <li>Animations</li>
              <li>Comics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#FFD700]">
              <li>About Us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-[#FFD700] mb-4">
              Subscribe to our newsletter for updates and art tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full bg-white text-black border-0"
              />
              <button className="bg-[#FFD700] hover:bg-[#FFC700] px-4 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FFD700]">© 2024 wyo. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Facebook className="h-5 w-5 text-sky-500 hover:text-[#FFD700] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-sky-500 hover:text-[#FFD700] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-sky-500 hover:text-[#FFD700] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-sky-500 hover:text-[#FFD700] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
