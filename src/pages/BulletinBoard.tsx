
import Navbar from "@/components/Navbar";

export default function BulletinBoard() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Bulletin Board</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest community announcements and activities.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <p className="text-center text-gray-500">Coming soon!</p>
        </div>
      </div>
    </div>
  );
}
