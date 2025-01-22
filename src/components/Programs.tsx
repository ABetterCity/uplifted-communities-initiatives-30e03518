import { Book, Briefcase, Home, Utensils } from "lucide-react";

const programs = [
  {
    icon: Utensils,
    title: "Food Assistance",
    description: "Providing nutritious meals and groceries to families in need through our network of food banks and community partners."
  },
  {
    icon: Book,
    title: "Education Programs",
    description: "Offering educational resources and tutoring to help students of all ages succeed in their academic journey."
  },
  {
    icon: Briefcase,
    title: "Job Training",
    description: "Empowering individuals with skills and certifications needed to secure stable, well-paying employment opportunities."
  },
  {
    icon: Home,
    title: "Community Spaces",
    description: "Creating safe, welcoming spaces where community members can gather, learn, and support one another."
  }
];

const Programs = () => {
  return (
    <section id="programs" className="relative py-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/fa02b442-cfe6-48fa-97fe-6105d2189900.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.15'
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive support through various programs designed to address the unique needs of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {programs.map((program) => (
            <div 
              key={program.title} 
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                <program.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;