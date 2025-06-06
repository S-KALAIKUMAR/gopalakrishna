import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: '/lovable-uploads/36d039cb-c822-484e-bdf0-24168625b837.png',
      title: 'Exclusive Festive Offers',
      subtitle: 'Up to 30% off on all silk sarees - Limited time only!',
      cta: 'Shop Offers',
      link: '/offers',
      isOffer: true
    },
    {
      id: 2,
      image: '/lovable-uploads/8d49d02d-0fbc-4eb3-a825-dc19a966b9f0.png',
      title: 'Wedding Special Collection',
      subtitle: 'Perfect sarees for your special day with exclusive discounts',
      cta: 'View Wedding Collection',
      link: '/category/wedding',
      isOffer: true
    },
    {
      id: 3,
      image: '/lovable-uploads/6a626782-a951-4546-aa9d-d6822f21b34f.png',
      title: 'Silk Heritage Collection',
      subtitle: 'Traditional silk sarees with modern elegance',
      cta: 'Explore Collection',
      link: '/collections',
      isOffer: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCTAClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mx-4 my-6">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white animate-fade-in max-w-4xl px-4">
                {slide.isOffer && (
                  <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    EXCLUSIVE OFFER
                  </div>
                )}
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <button 
                  onClick={() => handleCTAClick(slide.link)}
                  className={`${
                    slide.isOffer 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-secondary-500 hover:bg-secondary-600'
                  } text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105`}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
