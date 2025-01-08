import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavigateAbout = () => {
    navigate('/AboutUs');
  };

  const handleNavigateService = () => {
    navigate('/Services');
  };

  const handleNavigateBlogs = () => {
    toggleMenu(); // Close the menu
    if (location.pathname === '/') {
      scrollToSection('blogs');
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection('blogs');
      }, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='fixed top-0 left-0 z-50 w-full border-b bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2'>
        <div className='inline-flex items-center space-x-2'>
          <a onClick={handleLogoClick} className='font-bold cursor-pointer'>
            PositiveWay Solutions
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <ul className='inline-flex space-x-8'>
            <li>
              <a
                href='#'
                className='text-sm font-semibold text-gray-800 hover:text-gray-900'
                onClick={handleLogoClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='text-sm font-semibold text-gray-800 hover:text-gray-900'
                onClick={handleNavigateAbout}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#our_services'
                className='text-sm font-semibold text-gray-800 hover:text-gray-900'
                onClick={handleNavigateService}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#blogs'
                className='text-sm font-semibold text-gray-800 hover:text-gray-900'
                onClick={handleNavigateBlogs}
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <svg
            onClick={toggleMenu}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-6 w-6 cursor-pointer'
          >
            <line x1='4' y1='12' x2='20' y2='12'></line>
            <line x1='4' y1='6' x2='20' y2='6'></line>
            <line x1='4' y1='18' x2='20' y2='18'></line>
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden px-4 py-2 transform transition-all duration-3000 ${
          isMenuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className='space-y-4'>
          <li>
            <a
              href='#'
              className='block text-sm font-semibold text-gray-800 hover:text-gray-900'
              onClick={() => {
                toggleMenu();
                handleLogoClick();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='block text-sm font-semibold text-gray-800 hover:text-gray-900'
              onClick={() => {
                toggleMenu();
                handleNavigateAbout();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#our_services'
              className='block text-sm font-semibold text-gray-800 hover:text-gray-900'
              onClick={() => {
                toggleMenu();
                handleNavigateService();
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#blogs'
              className='block text-sm font-semibold text-gray-800 hover:text-gray-900'
              onClick={handleNavigateBlogs}
            >
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
