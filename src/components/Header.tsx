
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
import SignupDialog from './SignupDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderMobileBottomNav = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-roadhelp-dark border-t border-gray-700 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          <a 
            href="/" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? 'text-roadhelp-pink' : 'text-gray-400'}`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a 
            href="/nearby" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/nearby') ? 'text-roadhelp-pink' : 'text-gray-400'}`}
          >
            <MapPin size={24} />
            <span className="text-xs mt-1">Nearby</span>
          </a>
          <a 
            href="/history" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/history') ? 'text-roadhelp-pink' : 'text-gray-400'}`}
          >
            <History size={24} />
            <span className="text-xs mt-1">History</span>
          </a>
          <a 
            href="/profile" 
            className={`flex flex-col items-center justify-center w-full h-full ${isActive('/profile') ? 'text-roadhelp-pink' : 'text-gray-400'}`}
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
      <header className={`${isMobile ? '' : 'fixed'} top-0 left-0 right-0 bg-roadhelp-dark shadow-md z-50`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">Road<span className="text-roadhelp-pink">help</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-8">
              <a href="/" className={`flex items-center gap-2 ${isActive('/') ? 'text-roadhelp-pink' : 'text-gray-300'}`}>
                <Home size={18} /> 
                <span>Home</span>
              </a>
              <a href="/nearby" className={`flex items-center gap-2 ${isActive('/nearby') ? 'text-roadhelp-pink' : 'text-gray-300'}`}>
                <MapPin size={18} /> 
                <span>Nearby</span>
              </a>
              <a href="/history" className={`flex items-center gap-2 ${isActive('/history') ? 'text-roadhelp-pink' : 'text-gray-300'}`}>
                <History size={18} /> 
                <span>History</span>
              </a>
              <a href="/profile" className={`flex items-center gap-2 ${isActive('/profile') ? 'text-roadhelp-pink' : 'text-gray-300'}`}>
                <UserRound size={18} /> 
                <span>Profile</span>
              </a>
              <div className="flex space-x-3">
                <Button variant="outline" className="text-white border-roadhelp-purple hover:bg-roadhelp-purple">Login</Button>
                <SignupDialog />
              </div>
            </nav>
          )}

          {/* Mobile Header - Right Side Buttons */}
          {isMobile && (
            <div className="flex items-center space-x-3">
              <SignupDialog />
              <button 
                className="text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Top Menu */}
        {isMobile && isMenuOpen && (
          <div className="bg-roadhelp-dark border-t border-gray-700 py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-3 pt-3">
                <Button variant="outline" className="w-full text-white border-roadhelp-purple hover:bg-roadhelp-purple">Login</Button>
                <SignupDialog buttonProps={{ 
                  className: "w-full bg-roadhelp-purple hover:bg-roadhelp-rose text-white font-medium" 
                }} />
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
