
import { Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedSarees = () => {
  const sarees = [
    {
      id: 1,
      name: 'Royal Blue Silk Saree',
      price: '₹2,999',
      originalPrice: '₹3,999',
      image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png',
      offer: '25% OFF',
      category: 'Silk'
    },
    {
      id: 2,
      name: 'Elegant Cotton Saree',
      price: '₹1,499',
      originalPrice: '₹1,999',
      image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png',
      offer: '25% OFF',
      category: 'Cotton'
    },
    {
      id: 3,
      name: 'Wedding Special Banarasi',
      price: '₹5,999',
      originalPrice: '₹7,999',
      image: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png',
      offer: '25% OFF',
      category: 'Banarasi'
    },
    {
      id: 4,
      name: 'Party Wear Georgette',
      price: '₹2,299',
      originalPrice: '₹2,999',
      image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png',
      offer: '23% OFF',
      category: 'Party Wear'
    },
    {
      id: 5,
      name: 'Traditional Print Saree',
      price: '₹1,799',
      originalPrice: '₹2,299',
      image: '/lovable-uploads/0ffa8394-009e-4eba-8aa0-e774905057a8.png',
      offer: '22% OFF',
      category: 'Cotton'
    },
    {
      id: 6,
      name: 'Designer Silk Collection',
      price: '₹4,499',
      originalPrice: '₹5,999',
      image: '/lovable-uploads/36d039cb-c822-484e-bdf0-24168625b837.png',
      offer: '25% OFF',
      category: 'Silk'
    }
  ];

  const handleWhatsAppClick = (saree: typeof sarees[0]) => {
    const message = `Hi! I'm interested in ${saree.name} (Price: ${saree.price}). Please share more details.`;
    const phoneNumber = "919876543210"; // Replace with actual business WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
          Featured Sarees
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sarees.map((saree) => (
            <div
              key={saree.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-secondary-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {saree.offer}
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              
              <div className="p-4">
                <span className="text-sm text-secondary-600 font-medium">{saree.category}</span>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {saree.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary-800">{saree.price}</span>
                  <span className="text-gray-500 line-through">{saree.originalPrice}</span>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick(saree)}
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Buy via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/all-sarees"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Sarees
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSarees;
