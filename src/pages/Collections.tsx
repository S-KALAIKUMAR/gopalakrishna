import Header from '../components/Header';
import Footer from '../components/Footer';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: 'Bridal Collection',
      description: 'Exquisite sarees for your special day',
      image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png',
      itemCount: 25
    },
    {
      id: 2,
      name: 'Festival Special',
      description: 'Vibrant sarees for celebrations',
      image: '/lovable-uploads/36d039cb-c822-484e-bdf0-24168625b837.png',
      itemCount: 18
    },
    {
      id: 3,
      name: 'Office Wear',
      description: 'Elegant sarees for professional settings',
      image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png',
      itemCount: 22
    },
    {
      id: 4,
      name: 'Summer Collection',
      description: 'Light and comfortable sarees for hot weather',
      image: '/lovable-uploads/0ffa8394-009e-4eba-8aa0-e774905057a8.png',
      itemCount: 15
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
            Our Collections
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our carefully curated collections, each designed for different occasions and styles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                      <p className="text-sm opacity-90">{collection.itemCount} items</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{collection.name}</h3>
                  <p className="text-gray-600 text-sm">{collection.description}</p>
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

export default Collections;
