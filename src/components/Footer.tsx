import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">A Better City</h3>
            <p className="mb-4">
              Building stronger communities through compassion and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Chicago, IL</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>info@abettercity.org</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-accent transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Donate</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Volunteer</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} A Better City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;