import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CircuitBoard } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const isDashboardPage = location.pathname.includes('/dashboard');

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage || isDashboardPage
      ? 'bg-white shadow-md py-3'
      : 'bg-transparent py-5'
  }`;

  const linkClasses = `relative text-sm font-medium transition-colors hover:text-primary-600 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-primary-600 before:content-[''] before:w-0 before:hover:w-full before:transition-all before:duration-300`;
  
  const activeLinkClasses = `${linkClasses} text-primary-600 before:w-full`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <CircuitBoard className="w-8 h-8 text-primary-800" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
                Clydra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : linkClasses
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="btn-outline py-1.5"
            >
              Log in
            </Link>
            <Link 
              to="/register" 
              className="btn-primary py-1.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 pt-2 pb-4 bg-white border-t mt-3">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-600 font-medium'
                    : 'text-gray-700 hover:text-primary-600'
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              <Link to="/login" className="btn-outline w-full">
                Log in
              </Link>
              <Link to="/register" className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;