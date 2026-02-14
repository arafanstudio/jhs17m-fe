import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner";
import { useAdminAuth, logoutAdmin } from "../hooks/useAdminAuth";
import { useLocation } from "wouter";

export default function ArticleCreation() {
  const isAuthenticated = useAdminAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("student");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();

  if (!isAuthenticated) {
    // The useAdminAuth hook will handle the redirect to login
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!title.trim() || !content.trim() || !author.trim()) {
      toast.error("Title, content, and author name are required");
      return;
    }
    
    setLoading(true);

    // For simplicity, we'll re-send the admin credentials with the article data
    // In a real application, a JWT from the login would be used for authorization
    const username = localStorage.getItem("ADMIN_USERNAME") || "admin";
    const password = localStorage.getItem("ADMIN_PASSWORD") || "password";

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image_url: imageUrl,
          category,
          author,
          username,
          password,
        }),
      });

      if (response.ok) {
        toast.success("Article created successfully!");
        setTitle("");
        setContent("");
        setImageUrl("");
        setCategory("student");
        setAuthor("");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to create article.");
      }
    } catch (error) {
      console.error("Article creation error:", error);
      toast.error("An error occurred while creating the article.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    toast.info("Logged out successfully.");
    setLocation("/admin/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-3xl flex justify-end mb-4">
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Article Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="author">Author Name</Label>
              <Input
                id="author"
                type="text"
                placeholder="Enter author name"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Article Content (Markdown supported)"
                required
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image URL (Optional)</Label>
              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating..." : "Create Article"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
