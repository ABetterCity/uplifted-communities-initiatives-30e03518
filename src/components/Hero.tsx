import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-primary-900 text-white min-h-[80vh]">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95"
        style={{
          backgroundImage: 'url("/lovable-uploads/d9b6b27c-320b-422f-897c-e4c5a986f5df.png")',
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.15'
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Stronger Communities Together
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Empowering individuals and families in the Chicagoland area through sustainable solutions and community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-accent hover:bg-accent-600 text-lg px-8 py-6"
              onClick={() => navigate('/volunteer')}
            >
              Get Involved
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => {
                const aboutSection = document.querySelector('#about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;