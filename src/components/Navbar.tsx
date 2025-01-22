import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">A Better City</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary">About</a>
            <a href="#programs" className="text-gray-600 hover:text-primary">Programs</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
            <Button 
              className="bg-accent hover:bg-accent-600"
              onClick={() => window.open('https://gofund.me/8dea43c1', '_blank')}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">About</a>
              <a href="#programs" className="block px-3 py-2 text-gray-600 hover:text-primary">Programs</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact</a>
              <Button 
                className="w-full mt-4 bg-accent hover:bg-accent-600"
                onClick={() => window.open('https://gofund.me/8dea43c1', '_blank')}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;