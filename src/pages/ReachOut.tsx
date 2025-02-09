
import { SurveyForm } from "@/components/SurveyForm";

export default function ReachOut() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Reach Out</h1>
        <p className="text-lg text-gray-600">
          We want to hear from you! Share your thoughts and help us make a better Chicago.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
        <SurveyForm />
      </div>
    </div>
  );
}
