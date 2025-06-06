
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Clock, Tag, Star, ArrowRight } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Festive Sale - 30% Off',
      description: 'Get 30% off on all silk sarees this festive season',
      discount: '30% OFF',
      validUntil: '2024-12-31',
      image: '/lovable-uploads/bac79869-f15a-4fc9-a381-ba5686f378f0.png',
      category: 'Silk Sarees',
      originalPrice: '₹4,999',
      salePrice: '₹3,499',
      rating: 4.5,
      isFeatured: true
    },
    {
      id: 2,
      title: 'Wedding Collection Special',
      description: 'Special prices on premium wedding sarees',
      discount: '25% OFF',
      validUntil: '2024-11-30',
      image: '/lovable-uploads/f5a12786-2c69-465e-81b0-7f2721a0f2a9.png',
      category: 'Wedding Collection',
      originalPrice: '₹7,999',
      salePrice: '₹5,999',
      rating: 4.8,
      isFeatured: true
    },
    {
      id: 3,
      title: 'Cotton Comfort Deal',
      description: 'Buy 2 cotton sarees and get 1 free',
      discount: 'Buy 2 Get 1',
      validUntil: '2024-10-15',
      image: '/lovable-uploads/bde076f5-b50a-4153-b89d-fe191a0d9ac8.png',
      category: 'Cotton Sarees',
      originalPrice: '₹2,999',
      salePrice: '₹1,999',
      rating: 4.3,
      isFeatured: false
    }
  ];

  const handleWhatsAppOrder = (offerTitle: string, salePrice: string) => {
    const message = `Hi! I'm interested in the "${offerTitle}" offer (${salePrice}). Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Exclusive Offers
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't miss out on our amazing deals and limited-time offers on beautiful sarees
            </p>
          </div>

          {/* Featured Offers */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Tag className="w-6 h-6 mr-2 text-primary-600" />
              Featured Offers
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {offers.filter(offer => offer.isFeatured).map((offer) => (
                <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2 relative">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {offer.discount}
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                            {offer.category}
                          </span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{offer.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                        <p className="text-gray-600 mb-4">{offer.description}</p>
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-2xl font-bold text-primary-600">{offer.salePrice}</span>
                          <span className="text-lg text-gray-500 line-through">{offer.originalPrice}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleWhatsAppOrder(offer.title, offer.salePrice)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Order via WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Offers */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {offer.discount}
                    </div>
                    {offer.isFeatured && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        {offer.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{offer.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{offer.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xl font-bold text-primary-600">{offer.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                    </div>
                    <button 
                      onClick={() => handleWhatsAppOrder(offer.title, offer.salePrice)}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
