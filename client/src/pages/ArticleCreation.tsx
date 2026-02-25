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
import { LogOut, FileText } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Create and manage articles</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2 border-gray-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText size={28} />
              Create New Article
            </CardTitle>
            <p className="text-blue-100 text-sm mt-3">Fill in the form below to create a new article</p>
          </CardHeader>
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title Field */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-700 font-semibold">
                  Article Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter article title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Author and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Author Field */}
                <div className="space-y-2">
                  <Label htmlFor="author" className="text-gray-700 font-semibold">
                    Author Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author"
                    type="text"
                    placeholder="Enter author name"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Category Field */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-700 font-semibold">
                    Category <span className="text-red-500">*</span>
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Content Field */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-gray-700 font-semibold">
                  Article Content <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Enter article content (Markdown supported)"
                  required
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-2">
                  💡 Tip: You can use Markdown formatting for better text styling
                </p>
              </div>

              {/* Image URL Field */}
              <div className="space-y-2">
                <Label htmlFor="imageUrl" className="text-gray-700 font-semibold">
                  Image URL <span className="text-gray-400 text-sm">(Optional)</span>
                </Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Provide a direct URL to an image. Leave blank if you don't want to add an image.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all transform hover:scale-105" 
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Article"}
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="px-6 border-gray-300 hover:bg-gray-50"
                  onClick={() => {
                    setTitle("");
                    setContent("");
                    setImageUrl("");
                    setCategory("student");
                    setAuthor("");
                  }}
                  disabled={loading}
                >
                  Clear
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Section */}
        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
          <Card className="shadow-sm border-gray-200">
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">📝</div>
                <h3 className="font-semibold text-gray-800 mb-1">Rich Content</h3>
                <p className="text-sm text-gray-600">Support for Markdown formatting and styling</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-200">
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🖼️</div>
                <h3 className="font-semibold text-gray-800 mb-1">Image Support</h3>
                <p className="text-sm text-gray-600">Add featured images to your articles</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-200">
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🏷️</div>
                <h3 className="font-semibold text-gray-800 mb-1">Categories</h3>
                <p className="text-sm text-gray-600">Organize articles by category</p>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </main>
    </div>
  );
}
