
import { Link } from 'react-router-dom';

const CategoryCollection = () => {
  const categories = [
    {
      id: 1,
      name: 'Cotton Sarees',
      slug: 'cotton',
      image: '/lovable-uploads/e880cfb9-7fad-4a7b-ada6-9e9adede3d36.png',
    },
    {
      id: 2,
      name: 'Silk Sarees',
      slug: 'silk',
      image: '/lovable-uploads/e33b135d-9219-43f3-8512-6f3da821e081.png',
    },
    {
      id: 3,
      name: 'Banarasi',
      slug: 'banarasi',
      image: '/lovable-uploads/833213e2-0aa3-423c-a06d-13c25fd7f3f0.png',
    },
    {
      id: 4,
      name: 'Wedding Collection',
      slug: 'wedding',
      image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png',
    },
    {
      id: 5,
      name: 'Party Wear',
      slug: 'party-wear',
      image: '/lovable-uploads/ea665907-863b-422c-8695-8a26c8c3d32d.png',
    },
    {
      id: 6,
      name: 'Georgette',
      slug: 'georgette',
      image: '/lovable-uploads/5d898fbe-3ba9-4550-8ab3-806c33e4bf03.png',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
          Shop by Categories
        </h2>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="text-center cursor-pointer group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary-100 group-hover:border-secondary-400 transition-all duration-300 group-hover:scale-105 mx-auto">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="mt-3 font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCollection;
