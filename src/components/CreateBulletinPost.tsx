
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export default function CreateBulletinPost({ onPostCreated }: { onPostCreated: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [location, setLocation] = useState("");
  const [mood, setMood] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("bulletin_posts").insert({
        title,
        content,
        author_name: authorName,
        location,
        mood,
      });

      if (error) throw error;

      toast.success("Your post has been shared!");
      setTitle("");
      setContent("");
      setAuthorName("");
      setLocation("");
      setMood("");
      onPostCreated();
    } catch (error) {
      toast.error("Failed to share your post. Please try again.");
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Give your post a title"
        />
      </div>

      <div>
        <Label htmlFor="content">Your Thoughts</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Share your feelings about Chicago..."
          className="min-h-[150px]"
        />
      </div>

      <div>
        <Label htmlFor="authorName">Your Name</Label>
        <Input
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
          placeholder="Enter your name"
        />
      </div>

      <div>
        <Label htmlFor="location">Neighborhood (optional)</Label>
        <Input
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Loop, Lincoln Park, etc."
        />
      </div>

      <div>
        <Label htmlFor="mood">Current Mood (optional)</Label>
        <Input
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sharing..." : "Share Your Thoughts"}
      </Button>
    </form>
  );
}
