
import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";

const Roadmap = () => {
  const milestones = [
    {
      title: "Community Engagement",
      progress: 75,
      description: "Building strong relationships with local residents and organizations",
    },
    {
      title: "Infrastructure Assessment",
      progress: 60,
      description: "Evaluating current city infrastructure and identifying areas for improvement",
    },
    {
      title: "Sustainability Initiatives",
      progress: 40,
      description: "Implementing green solutions and environmental programs",
    },
    {
      title: "Economic Development",
      progress: 25,
      description: "Supporting local businesses and creating job opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary">Our Road to a Better City</h1>
          <p className="text-gray-600 text-center mb-12">
            Track our progress as we work together to transform our community
          </p>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-primary">{milestone.title}</h3>
                  <span className="text-sm font-medium text-gray-500">{milestone.progress}%</span>
                </div>
                <Progress value={milestone.progress} className="h-2 mb-3" />
                <p className="text-gray-600 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;
