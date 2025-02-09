
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Post {
  id: string;
  created_at: string;
  title: string;
  content: string;
  author_name: string | null;
  location: string | null;
  mood: string | null;
}

export default function BulletinPosts() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["bulletin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bulletin_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Post[];
    },
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (!posts?.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No posts yet. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <time className="text-sm text-gray-500">
              {format(new Date(post.created_at), "MMM d, yyyy")}
            </time>
          </div>
          <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {post.author_name && <p>Posted by: {post.author_name}</p>}
            {post.location && <p>From: {post.location}</p>}
            {post.mood && <p>Feeling: {post.mood}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
