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
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/b71def0e-7714-46ce-91bb-94be271a897f.png" 
                alt="A Better City Logo" 
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
                A Better City
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;