
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // If not first visit, skip splash screen
      onComplete();
      return;
    }

    // Mark as visited
    localStorage.setItem('hasVisited', 'true');

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/d441a0eb-4c57-44ce-80aa-4b2a6f6d2acc.png" 
            alt="Sri Gopala Krishna Silks Logo" 
            className="w-32 h-32 mx-auto animate-fade-in"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Sri Gopala Krishna Silks
        </h1>
        <p className="text-gray-600 text-lg animate-fade-in">
          Traditional Fashion, Modern Shopping
        </p>
        <div className="mt-8">
          <div className="w-12 h-1 bg-gray-300 mx-auto rounded-full overflow-hidden">
            <div className="w-full h-full bg-primary-600 rounded-full animate-slide-in"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
