const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
          <p>
            "Hello, everyone. My name is Mershad Golchini, and I am incredibly honored to introduce A Better City. This organization is not just a vision—it's a movement, a promise to uplift individuals and families in the Chicagoland area who are facing financial hardships."
          </p>
          <p>
            "Our mission is clear: to go beyond temporary fixes and create sustainable solutions that build stronger communities. Whether it's through food assistance, education programs, job training, or safe community spaces, we aim to address the fundamental needs that empower people to thrive."
          </p>
          <p>
            "At A Better City, we believe in the power of compassion and collaboration. Together, we can create lasting change and build a better future for all."
          </p>
          <p className="text-right italic">- Mershad Golchini, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default About;