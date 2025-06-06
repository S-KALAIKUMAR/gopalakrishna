
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, MessageCircle, Filter } from 'lucide-react';

const AllSarees = () => {
  // Combined all sarees from different categories
  const allSarees = [
    // Cotton Sarees
    { id: 'cotton-1', name: 'Handloom Cotton Saree', price: '₹1,299', image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png', category: 'Cotton' },
    { id: 'cotton-2', name: 'Printed Cotton Saree', price: '₹999', image: '/lovable-uploads/0ffa8394-009e-4eba-8aa0-e774905057a8.png', category: 'Cotton' },
    
    // Silk Sarees
    { id: 'silk-1', name: 'Pure Silk Kanjivaram', price: '₹8,999', image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png', category: 'Silk' },
    { id: 'silk-2', name: 'Designer Silk Saree', price: '₹5,499', image: '/lovable-uploads/36d039cb-c822-484e-bdf0-24168625b837.png', category: 'Silk' },
    
    // Banarasi Sarees
    { id: 'banarasi-1', name: 'Gold Zari Banarasi', price: '₹12,999', image: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png', category: 'Banarasi' },
    { id: 'banarasi-2', name: 'Traditional Banarasi', price: '₹9,999', image: '/lovable-uploads/6a626782-a951-4546-aa9d-d6822f21b34f.png', category: 'Banarasi' },
    
    // Wedding Collection
    { id: 'wedding-1', name: 'Bridal Heavy Work Saree', price: '₹25,999', image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png', category: 'Wedding' },
    { id: 'wedding-2', name: 'Designer Wedding Saree', price: '₹18,999', image: '/lovable-uploads/06d9b858-e9f9-4992-9b14-fa33a0b27f3b.png', category: 'Wedding' },
    
    // Party Wear
    { id: 'party-1', name: 'Designer Party Saree', price: '₹4,999', image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png', category: 'Party Wear' },
    { id: 'party-2', name: 'Festive Party Wear', price: '₹3,799', image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png', category: 'Party Wear' },
    
    // Georgette Sarees
    { id: 'georgette-1', name: 'Embroidered Georgette Saree', price: '₹2,299', image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png', category: 'Georgette' },
    { id: 'georgette-2', name: 'Designer Georgette', price: '₹3,499', image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png', category: 'Georgette' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Cotton', 'Silk', 'Banarasi', 'Wedding', 'Party Wear', 'Georgette'];

  const filteredSarees = selectedCategory === 'All' 
    ? allSarees 
    : allSarees.filter(saree => saree.category === selectedCategory);

  const handleWhatsAppOrder = (saree: typeof allSarees[0]) => {
    const message = `Hi! I'm interested in ordering the ${saree.name} priced at ${saree.price}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-primary-800 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Sarees Collection</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our complete range of beautiful sarees from all categories
          </p>
        </div>
      </div>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'All' ? 'All Sarees' : `${selectedCategory} Sarees`}
            </h2>
            <div className="text-gray-600">
              Showing {filteredSarees.length} sarees
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSarees.map((saree) => (
              <div key={saree.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={saree.image}
                    alt={saree.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-secondary-600 font-medium">{saree.category}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{saree.name}</h3>
                  <p className="text-2xl font-bold text-primary-600 mb-3">{saree.price}</p>
                  
                  <button
                    onClick={() => handleWhatsAppOrder(saree)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllSarees;
