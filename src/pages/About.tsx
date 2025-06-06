
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
              About Sri Gopala Krishna Silks
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <img
                  src="/lovable-uploads/ced7aaa2-678e-4247-85e8-be0c5b4498e0.png"
                  alt="About Us"
                  className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg mb-6"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Sri Gopala Krishna Silks was founded with a passion for preserving and promoting the timeless beauty of traditional Indian sarees. We believe that every woman deserves to feel elegant and confident in authentic, high-quality sarees.
                  </p>
                  <p className="text-gray-600">
                    With over a decade of experience in the textile industry, we have carefully curated a collection that blends traditional craftsmanship with contemporary designs.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-gray-600 mb-4">
                    To make beautiful, authentic sarees accessible to women everywhere while supporting traditional artisans and their craft. We are committed to quality, authenticity, and customer satisfaction.
                  </p>
                  <p className="text-gray-600">
                    Every saree in our collection is handpicked for its quality, craftsmanship, and unique design elements that make each piece special.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Authentic Quality</h3>
                    <p className="text-gray-600">Handpicked sarees from trusted artisans and weavers across India</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">WhatsApp Ordering</h3>
                    <p className="text-gray-600">Easy and convenient ordering through WhatsApp with personalized service</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Customer Support</h3>
                    <p className="text-gray-600">Dedicated support team to help you find the perfect saree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
