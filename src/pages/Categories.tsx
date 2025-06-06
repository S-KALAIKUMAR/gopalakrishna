import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Cotton Sarees',
      slug: 'cotton',
      description: 'Comfortable and breathable cotton sarees perfect for daily wear',
      image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png',
      itemCount: 45
    },
    {
      id: 2,
      name: 'Silk Sarees',
      slug: 'silk',
      description: 'Luxurious silk sarees for special occasions and formal events',
      image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png',
      itemCount: 32
    },
    {
      id: 3,
      name: 'Banarasi Sarees',
      slug: 'banarasi',
      description: 'Traditional Banarasi sarees with intricate gold and silver work',
      image: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png',
      itemCount: 28
    },
    {
      id: 4,
      name: 'Wedding Collection',
      slug: 'wedding',
      description: 'Stunning bridal and wedding sarees for your special day',
      image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png',
      itemCount: 25
    },
    {
      id: 5,
      name: 'Party Wear',
      slug: 'party-wear',
      description: 'Glamorous sarees perfect for parties and celebrations',
      image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png',
      itemCount: 38
    },
    {
      id: 6,
      name: 'Georgette Sarees',
      slug: 'georgette',
      description: 'Flowy georgette sarees with elegant draping and comfort',
      image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png',
      itemCount: 35
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
            Shop by Categories
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our extensive collection of sarees organized by fabric, style, and occasion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.itemCount} items</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
