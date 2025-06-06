
import { useState } from 'react';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchDialog from './SearchDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const categories = [
    { name: 'Cotton Sarees', slug: 'cotton' },
    { name: 'Silk Sarees', slug: 'silk' },
    { name: 'Banarasi Sarees', slug: 'banarasi' },
    { name: 'Wedding Collection', slug: 'wedding' },
    { name: 'Party Wear', slug: 'party-wear' },
    { name: 'Georgette Sarees', slug: 'georgette' }
  ];

  const toggleCollectionDropdown = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

  const closeCollectionDropdown = () => {
    setIsCollectionOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d441a0eb-4c57-44ce-80aa-4b2a6f6d2acc.png" 
                alt="Logo" 
                className="w-10 h-10"
              />
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
                Sri Gopala Krishna Silks
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              
              {/* Collection Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={toggleCollectionDropdown}
                >
                  Collection
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {isCollectionOpen && (
                  <>
                    {/* Backdrop overlay */}
                    <div 
                      className="fixed inset-0 z-40"
                      onClick={closeCollectionDropdown}
                    />
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
                      <div className="py-2">
                        <Link 
                          to="/collections" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                          onClick={closeCollectionDropdown}
                        >
                          All Collections
                        </Link>
                        <Link 
                          to="/all-sarees" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                          onClick={closeCollectionDropdown}
                        >
                          All Sarees
                        </Link>
                        <hr className="my-2" />
                        <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Shop by Categories
                        </div>
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            to={`/category/${category.slug}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={closeCollectionDropdown}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <Link to="/offers" className="text-gray-700 hover:text-primary-600 transition-colors">Offers</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
            </nav>

            {/* Search */}
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
                <Link to="/collections" className="text-gray-700 hover:text-primary-600 transition-colors">Collection</Link>
                <Link to="/all-sarees" className="text-gray-700 hover:text-primary-600 transition-colors">All Sarees</Link>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className="block text-gray-600 hover:text-primary-600 transition-colors text-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <Link to="/offers" className="text-gray-700 hover:text-primary-600 transition-colors">Offers</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Header;
