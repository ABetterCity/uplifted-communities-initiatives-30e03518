import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Make a Difference Today</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join us in our mission to create positive change in the Chicagoland area. 
          Whether through donation or volunteering, your support makes a real impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => window.open('https://gofund.me/8dea43c1', '_blank')}
            className="bg-white text-accent hover:bg-gray-100"
          >
            Donate Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/volunteer')}
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            Volunteer With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;