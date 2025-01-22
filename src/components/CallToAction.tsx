import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="contact" className="bg-primary-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or spreading the word, your support helps us create lasting change in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-accent hover:bg-accent-600 text-lg px-8 py-6"
              onClick={() => window.open('https://gofund.me/8dea43c1', '_blank')}
            >
              Donate Now
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-lg px-8 py-6">
              Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;