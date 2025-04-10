
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home,
  MapPin,
  History,
  UserRound
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-roadhelp-blue">Road<span className="text-roadhelp-orange">help</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link flex items-center gap-2">
            <Home size={18} /> 
            <span>Home</span>
          </a>
          <a href="/nearby" className="nav-link flex items-center gap-2">
            <MapPin size={18} /> 
            <span>Nearby</span>
          </a>
          <a href="/history" className="nav-link flex items-center gap-2">
            <History size={18} /> 
            <span>History</span>
          </a>
          <a href="/profile" className="nav-link flex items-center gap-2">
            <UserRound size={18} /> 
            <span>Profile</span>
          </a>
          <div className="flex space-x-3">
            <Button variant="outline" className="font-medium">Login</Button>
            <Button className="bg-roadhelp-blue hover:bg-blue-700 font-medium">Sign Up</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="py-2 nav-link flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </a>
            <a 
              href="/nearby" 
              className="py-2 nav-link flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin size={18} />
              <span>Nearby</span>
            </a>
            <a 
              href="/history" 
              className="py-2 nav-link flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <History size={18} />
              <span>History</span>
            </a>
            <a 
              href="/profile" 
              className="py-2 nav-link flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserRound size={18} />
              <span>Profile</span>
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="w-full font-medium">Login</Button>
              <Button className="w-full bg-roadhelp-blue hover:bg-blue-700 font-medium">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
