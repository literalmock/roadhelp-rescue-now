
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
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderMobileBottomNav = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          <a 
            href="/" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? 'text-roadhelp-blue' : 'text-gray-500'}`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a 
            href="/nearby" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/nearby') ? 'text-roadhelp-blue' : 'text-gray-500'}`}
          >
            <MapPin size={24} />
            <span className="text-xs mt-1">Nearby</span>
          </a>
          <a 
            href="/history" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/history') ? 'text-roadhelp-blue' : 'text-gray-500'}`}
          >
            <History size={24} />
            <span className="text-xs mt-1">History</span>
          </a>
          <a 
            href="/profile" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/profile') ? 'text-roadhelp-blue' : 'text-gray-500'}`}
          >
            <UserRound size={24} />
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={`${isMobile ? '' : 'fixed'} top-0 left-0 right-0 bg-white shadow-sm z-50`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-roadhelp-blue">Road<span className="text-roadhelp-orange">help</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-8">
              <a href="/" className={`nav-link flex items-center gap-2 ${isActive('/') ? 'text-roadhelp-blue' : ''}`}>
                <Home size={18} /> 
                <span>Home</span>
              </a>
              <a href="/nearby" className={`nav-link flex items-center gap-2 ${isActive('/nearby') ? 'text-roadhelp-blue' : ''}`}>
                <MapPin size={18} /> 
                <span>Nearby</span>
              </a>
              <a href="/history" className={`nav-link flex items-center gap-2 ${isActive('/history') ? 'text-roadhelp-blue' : ''}`}>
                <History size={18} /> 
                <span>History</span>
              </a>
              <a href="/profile" className={`nav-link flex items-center gap-2 ${isActive('/profile') ? 'text-roadhelp-blue' : ''}`}>
                <UserRound size={18} /> 
                <span>Profile</span>
              </a>
              <div className="flex space-x-3">
                <Button variant="outline" className="font-medium">Login</Button>
                <Button className="bg-roadhelp-blue hover:bg-blue-700 font-medium">Sign Up</Button>
              </div>
            </nav>
          )}

          {/* Mobile Menu Button - only show it if we're not displaying the bottom nav */}
          {isMobile && (
            <button 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Top Menu */}
        {isMobile && isMenuOpen && (
          <div className="bg-white border-t border-gray-100 py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-3 pt-3">
                <Button variant="outline" className="w-full font-medium">Login</Button>
                <Button className="w-full bg-roadhelp-blue hover:bg-blue-700 font-medium">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      {/* Mobile Bottom Navigation */}
      {isMobile && renderMobileBottomNav()}
    </>
  );
};

export default Header;
