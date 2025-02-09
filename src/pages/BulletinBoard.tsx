
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import CreateBulletinPost from "@/components/CreateBulletinPost";
import BulletinPosts from "@/components/BulletinPosts";
import { Toaster } from "@/components/ui/toaster";

// Create a client
const queryClient = new QueryClient();

export default function BulletinBoard() {
  const [isCreating, setIsCreating] = useState(false);

  const handlePostCreated = () => {
    setIsCreating(false);
    queryClient.invalidateQueries({ queryKey: ["bulletin-posts"] });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-4xl pt-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Chicago Voices</h1>
            <p className="text-lg text-gray-600">
              Share your thoughts and feelings about our city. Let your voice be heard.
            </p>
          </div>

          <div className="mb-8">
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="text-primary hover:text-primary/90 transition-colors font-medium"
            >
              {isCreating ? "← Back to posts" : "+ Share Your Thoughts"}
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            {isCreating ? (
              <CreateBulletinPost onPostCreated={handlePostCreated} />
            ) : (
              <BulletinPosts />
            )}
          </div>
        </div>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
