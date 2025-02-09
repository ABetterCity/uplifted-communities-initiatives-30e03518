
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
              A Better City
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/reach-out" 
              className="px-4 py-2 text-primary hover:text-primary/90 transition-colors font-medium"
            >
              Reach Out
            </Link>
            <Link 
              to="/bulletin-board" 
              className="px-4 py-2 text-primary hover:text-primary/90 transition-colors font-medium"
            >
              Bulletin Board
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
