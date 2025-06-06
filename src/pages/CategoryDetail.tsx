import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const categoryData: Record<string, any> = {
    cotton: {
      name: 'Cotton Sarees',
      description: 'Comfortable and breathable cotton sarees perfect for daily wear and casual occasions.',
      banner: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png'
    },
    silk: {
      name: 'Silk Sarees',
      description: 'Luxurious silk sarees that exude elegance and sophistication for special occasions.',
      banner: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png'
    },
    banarasi: {
      name: 'Banarasi Sarees',
      description: 'Traditional handwoven Banarasi sarees with intricate gold and silver brocade work.',
      banner: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png'
    },
    wedding: {
      name: 'Wedding Collection',
      description: 'Stunning bridal sarees and wedding wear for your most special moments.',
      banner: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png'
    },
    'party-wear': {
      name: 'Party Wear',
      description: 'Glamorous party wear sarees perfect for celebrations and social events.',
      banner: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png'
    },
    georgette: {
      name: 'Georgette Sarees',
      description: 'Flowy and elegant georgette sarees that offer comfort with style.',
      banner: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png'
    }
  };

  // Unique products for each category using your uploaded images
  const categoryProducts: Record<string, any[]> = {
    cotton: [
      {
        id: 'cotton-1',
        name: 'Handloom Cotton Saree',
        price: '₹1,299',
        colorVariants: [
          { color: 'Floral Yellow', image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png' },
          { color: 'Traditional Print', image: '/lovable-uploads/0ffa8394-009e-4eba-8aa0-e774905057a8.png' }
        ]
      },
      {
        id: 'cotton-2',
        name: 'Printed Cotton Saree',
        price: '₹999',
        colorVariants: [
          { color: 'Geometric Print', image: '/lovable-uploads/0ffa8394-009e-4eba-8aa0-e774905057a8.png' },
          { color: 'Floral Design', image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png' }
        ]
      }
    ],
    silk: [
      {
        id: 'silk-1',
        name: 'Pure Silk Kanjivaram',
        price: '₹8,999',
        colorVariants: [
          { color: 'Green Gold Border', image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png' },
          { color: 'Pink Gold Zari', image: '/lovable-uploads/36d039cb-c822-484e-bdf0-24168625b837.png' }
        ]
      },
      {
        id: 'silk-2',
        name: 'Designer Silk Saree',
        price: '₹5,499',
        colorVariants: [
          { color: 'Pink Gold', image: '/lovable-uploads/36d039cb-c822-484e-bdf0-24168625b837.png' },
          { color: 'Green Traditional', image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png' }
        ]
      }
    ],
    banarasi: [
      {
        id: 'banarasi-1',
        name: 'Gold Zari Banarasi',
        price: '₹12,999',
        colorVariants: [
          { color: 'Red Gold Brocade', image: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png' },
          { color: 'Blue Silver Work', image: '/lovable-uploads/6a626782-a951-4546-aa9d-d6822f21b34f.png' }
        ]
      },
      {
        id: 'banarasi-2',
        name: 'Traditional Banarasi',
        price: '₹9,999',
        colorVariants: [
          { color: 'Blue Traditional', image: '/lovable-uploads/6a626782-a951-4546-aa9d-d6822f21b34f.png' },
          { color: 'Red Heritage', image: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png' }
        ]
      }
    ],
    wedding: [
      {
        id: 'wedding-1',
        name: 'Bridal Heavy Work Saree',
        price: '₹25,999',
        colorVariants: [
          { color: 'Bridal Red', image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png' },
          { color: 'Golden Embroidery', image: '/lovable-uploads/06d9b858-e9f9-4992-9b14-fa33a0b27f3b.png' }
        ]
      },
      {
        id: 'wedding-2',
        name: 'Designer Wedding Saree',
        price: '₹18,999',
        colorVariants: [
          { color: 'Green Gold Work', image: '/lovable-uploads/06d9b858-e9f9-4992-9b14-fa33a0b27f3b.png' },
          { color: 'Red Bridal', image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png' }
        ]
      }
    ],
    'party-wear': [
      {
        id: 'party-1',
        name: 'Designer Party Saree',
        price: '₹4,999',
        colorVariants: [
          { color: 'Red Party Wear', image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png' },
          { color: 'Green Festive', image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png' }
        ]
      },
      {
        id: 'party-2',
        name: 'Festive Party Wear',
        price: '₹3,799',
        colorVariants: [
          { color: 'Green Embroidered', image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png' },
          { color: 'Red Designer', image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png' }
        ]
      }
    ],
    georgette: [
      {
        id: 'georgette-1',
        name: 'Embroidered Georgette Saree',
        price: '₹2,299',
        colorVariants: [
          { color: 'Green Georgette', image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png' },
          { color: 'Red Georgette', image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png' }
        ]
      },
      {
        id: 'georgette-2',
        name: 'Designer Georgette',
        price: '₹3,499',
        colorVariants: [
          { color: 'Party Green', image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png' },
          { color: 'Festive Red', image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png' }
        ]
      }
    ]
  };

  // Get the current category and products
  const category = slug ? categoryData[slug] : null;
  const products = slug ? categoryProducts[slug] || [] : [];

  // State to track selected color for each product
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>(
    products.reduce((acc, product) => {
      acc[product.id] = 0; // Default to first color
      return acc;
    }, {} as Record<string, number>)
  );

  const handleColorSelect = (productId: string, colorIndex: number) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorIndex
    }));
  };

  const handleWhatsAppOrder = (productName: string, price: string, color: string) => {
    const message = `Hi! I'm interested in ordering the ${productName} in ${color} color priced at ${price}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle case where category is not found
  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
            <p className="text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Banner Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={category.banner}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg md:text-xl max-w-2xl">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Available Products</h2>
            <div className="text-gray-600">
              Showing {products.length} products
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => {
              const selectedColorIndex = selectedColors[product.id] || 0;
              const selectedVariant = product.colorVariants[selectedColorIndex];
              
              return (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={selectedVariant.image}
                      alt={`${product.name} - ${selectedVariant.color}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary-600 mb-3">{product.price}</p>
                    
                    {/* Color Selection */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Available Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.colorVariants.map((variant, index) => (
                          <button
                            key={index}
                            onClick={() => handleColorSelect(product.id, index)}
                            className={`text-xs px-3 py-2 rounded-full border transition-all duration-200 ${
                              selectedColorIndex === index
                                ? 'bg-primary-600 text-white border-primary-600'
                                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                            }`}
                          >
                            {variant.color}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Selected: {selectedVariant.color}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleWhatsAppOrder(product.name, product.price, selectedVariant.color)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
