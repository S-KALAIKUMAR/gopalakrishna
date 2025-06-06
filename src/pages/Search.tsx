import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = [
    {
      id: 1,
      name: 'Cotton Floral Saree',
      price: '₹1,899',
      image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png',
      category: 'Cotton'
    },
    {
      id: 2,
      name: 'Silk Banarasi Saree',
      price: '₹4,299',
      image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png',
      category: 'Silk'
    },
    {
      id: 3,
      name: 'Wedding Designer Saree',
      price: '₹6,999',
      image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png',
      category: 'Wedding'
    }
  ];

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Hi! I found the ${productName} (${price}) through search and I'm interested in ordering it. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Search Results for "{query}"
            </h1>
            <p className="text-gray-600">
              Found {searchResults.length} results matching your search
            </p>
          </div>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {searchResults.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary-600 mb-4">{product.price}</p>
                    <button
                      onClick={() => handleWhatsAppOrder(product.name, product.price)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No results found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any sarees matching "{query}". Try searching with different keywords.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Try searching for:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['cotton', 'silk', 'banarasi', 'wedding', 'party wear', 'georgette'].map((suggestion) => (
                    <span key={suggestion} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
